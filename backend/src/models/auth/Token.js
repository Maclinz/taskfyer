import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  verificationToken: {
    type: String,
    default: "",
  },

  passwordResetToken: {
    type: String,
    default: "",
  },

  createdAt: {
    type: Date,
    required: true,
  },

  expiresAt: {
    type: Date,
    required: true,
  },
});

const Token = mongoose.model("Token", TokenSchema);

export default Token;
