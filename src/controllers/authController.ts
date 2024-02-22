import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";
import dotenv from "dotenv";
dotenv.config();

import transporter from "../config/mail";
import sendMail from "../utils/sendMail";

const returnAvatarId = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isEmail.test(email)) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
      res.json({ avatarId: user.avatarId });
    } else {
      res.status(400).json({ message: "Invalid Email Address" });
    }
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const refresh = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refresh;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWTSECRET as string);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Token is not valid, authorization denied" });
    }
    // @ts-ignore
    const user = await User.findOne({ _id: decoded.user.id });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Generate JWT
    const newToken = jwt.sign(
      { user: { id: user.id, email: user.email } },
      process.env.JWTSECRET as string,
      {
        expiresIn: "1d",
      }
    );

    // setup http cookie headers
    res.cookie("refresh", newToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json({
      id: user.id,
      token: newToken,
      avatarId: user.avatarId,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      emailVerified: false,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const registerUser = async (req: Request, res: Response) => {
  try {
    const { avatarId, firstName, lastName, userName, email, password } =
      req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists. Login" });
    }

    let username = await User.findOne({ userName });
    if (username) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generate otp 6 digits
    const otp = Math.floor(100000 + Math.random() * 900000);

    let message = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify your email",
      text: `Your OTP is ${otp}`,
      html: `<p>Your OTP is ${otp}</p>`,
    };

    sendMail(message);
    // Create new user
    user = new User({
      avatarId,
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      otp: otp,
      emailVerified: false,
      signupMethod: "standard",
    });
    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { user: { id: user.id } },
      process.env.JWTSECRET as string,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("refresh", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(201).json({ token });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error sign up" });
  }
};

const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const refresh = req.cookies.refresh;
    if (!refresh) {
      return res.status(400).json({ message: "You are not authenticated" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP, please try again" });
    }

    user.emailVerified = true;
    await user.save();

    res.json({ message: "Email verified" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const resendOtp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const refresh = req.cookies.refresh;
    if (!refresh) {
      return res.status(400).json({ message: "You are not authenticated" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // generate otp 6 digits
    const otp = Math.floor(100000 + Math.random() * 900000);

    user.otp = otp;
    await user.save();

    let message = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify your email",
      text: `Your OTP is ${otp}`,
      html: `<p>Your OTP is ${otp}</p>`,
    };

    sendMail(message);

    res.json({ message: "Email sent" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const passwordReset = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // generate otp 6 digits
    const otp = Math.floor(100000 + Math.random() * 900000);

    user.otp = otp;
    await user.save();

    let message = {
      from: "Sender Name <$email>",
      to: "Recipient <${email}>",
      subject: "Password Reset",
      text: `Your OTP is ${otp}`,
      html: `<p>Your OTP is ${otp}</p>`,
    };

    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
    });

    res.json({ message: "Email sent" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { user: { id: user.id, email: user.email } },
      process.env.JWTSECRET as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("refresh", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({
      token: token,
      id: user.id,
      avatarId: user.avatarId,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.userName,
      email: user.email,
      emailVerified: user.emailVerified,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    res.clearCookie("refresh");
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Logout successful.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to logout user.",
    });
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  returnAvatarId,
  refresh,
  verifyOTP,
  resendOtp,
  passwordReset,
};
