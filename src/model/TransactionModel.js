const mongoose = require("mongoose");

const TransactionModel = new mongoose.Schema(
  {
    payee_id: {
      type: Number,
      required: true
    },
    payer_id: {
      type: Number,
      required: true
    },
    transaction_date: {
      type: Date,
      default: Date.now(),
      required: true
    },
    value: Decimal128
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionModel);
