import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  userName: { type: String },
})

const user = mongoose.model("users", userSchema)

export {userSchema, user};
