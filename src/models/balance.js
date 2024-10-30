import mongoose from "mongoose";

const balanceSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  BRL: {type: Number},
  BTC: {type: Number},
  ETH: {type: Number},
  SOL: {type: Number}
}, { versionKey: false })

const balance = mongoose.model('balance', balanceSchema);

export {balanceSchema, balance};
