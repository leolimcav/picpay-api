const SellerModel = require("../model/SellerModel");
const ConsumerModel = require("../model/ConsumerModel");

module.exports = {
  async store(req, res) {
    const seller = req.body;
    const consumer = ConsumerModel.findOne({ user: seller.user });
    console.log(consumer);
    const { username } = consumer;
    if (!consumer) {
      console.log("Primeiro if");
      await SellerModel.create(seller);
      return res.json(seller);
    } else if (username !== seller.username) {
      console.log("Segundo if");
      console.log(username);
      await SellerModel.create(seller);
      return res.json(seller);
    } else if (consumer.username === seller.username)
      console.log(consumer.username);
    return res.status(400).send("Username already exist");
  }
};
