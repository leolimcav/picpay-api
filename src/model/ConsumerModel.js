const mongoose = require("mongoose");

const ConsumerModel = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Consumer", ConsumerModel);
