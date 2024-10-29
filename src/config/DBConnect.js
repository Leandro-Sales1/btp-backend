import mongoose from "mongoose";
import 'dotenv/config'

export default async function DBConnection(){
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}
