import { Request, Response } from "express";
import Subscribe from "../models/Subscribe";

const subscribe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Missing email" });
    }

    const newSubscriber = new Subscribe({
      email,
    });

    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { subscribe };
