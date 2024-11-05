import mongoose from "mongoose";
import 'dotenv/config'

export default async function DBConnection() {
  mongoose.connect(process.env.DB_CONNECTION_STRING, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
  return mongoose.connection;
}
