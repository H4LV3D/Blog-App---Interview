import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  returnAvatarId,
  refresh,
  verifyOTP,
  resendOtp,
  passwordReset,
  requestReset,
} from "../controllers/authController";

const router = express.Router();

// Route for user avatar
router.post("/avatar", returnAvatarId);

// Route for token refresh
router.post("/refresh", refresh);

// Route for user registration
router.post("/register", registerUser);

// Route for OTP verification
router.post("/verify", verifyOTP);

// Route for OTP resend
router.post("/resend", resendOtp);

// Route for password reset request
router.post("/request-reset", requestReset);

// Route for password reset
router.post("/reset-password", passwordReset);

// Route for user login
router.post("/login", loginUser);

// Route for user logout
router.post("/logout", logoutUser);

export default router;
