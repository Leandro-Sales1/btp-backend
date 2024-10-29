import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  userName: { type: String, required: true },
  balance: {type: Number},

})

const user = mongoose.model("users", userSchema)

export {userSchema, user};
