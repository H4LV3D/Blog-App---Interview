import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  avatarId: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  otp: {
    type: Number,
    required: false,
  },
  signupMethod: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
