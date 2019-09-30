const ConsumerModel = require("../model/ConsumerModel");
const SellerModel = require("../model/SellerModel");

module.exports = {
  async store(req, res) {
    const consumer = req.body;
    const seller = await SellerModel.findOne({ user: consumer.user });
    console.log(seller);
    if (!seller) {
      console.log("Primeiro if");
      await ConsumerModel.create(consumer);
      return res.json(consumer);
    } else if (seller.username !== consumer.username) {
      console.log("Segundo if");
      console.log(seller.username);
      await ConsumerModel.create(consumer);
      return res.json(consumer);
    } else if (seller.username === consumer.username) {
      console.log(seller.username);
      return res.status(400).send("Username already exist");
    }
  }
};
