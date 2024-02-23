import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Subscribe", SubscribeSchema);
