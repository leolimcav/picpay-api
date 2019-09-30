const mongoose = require("mongoose");

const SellerModel = new mongoose.Schema(
  {
    fantasy_name: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true
    },
    social_name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", SellerModel);
