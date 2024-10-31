import mongoose from "mongoose";
import { balanceSchema } from "./balance.js";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  userName: { type: String, required: true },
  passWord: { type: String },
  passWordHash: { type: String },
  balance: { type: balanceSchema },
}, { versionKey: false })

const user = mongoose.model("users", userSchema)

export { userSchema, user };
