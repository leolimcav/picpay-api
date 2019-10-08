const Consumer = require("../model/ConsumerModel");
const Seller = require("../model/SellerModel");

module.exports = {
  async store(req, res) {
    const { username } = req.body;
    const { user_id } = req.headers;
    const seller = await Seller.findOne({ user: user_id });

    if (seller && seller.username === username) {
      return res.json({ code: 201, msg: "Username already in use" });
    }

    const consumer = await Consumer.create({ username, user: user_id });
    await consumer.populate("user").execPopulate();

    return res.json(consumer);
  }
};
