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

router.post("/avatar", returnAvatarId);

router.post("/refresh", refresh);

// Route for user registration
router.post("/register", registerUser);

router.post("/verify", verifyOTP);

router.post("/resend", resendOtp);

router.post("/request-reset", requestReset);

router.post("/reset-password", passwordReset);

// Route for user login
router.post("/login", loginUser);

// Route for user logout
router.post("/logout", logoutUser);

export default router;
