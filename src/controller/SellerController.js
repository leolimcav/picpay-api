const Seller = require("../model/SellerModel");
const Consumer = require("../model/ConsumerModel");

module.exports = {
  async store(req, res) {
    const { fantasy_name, cnpj, social_name, username } = req.body;
    const { user_id } = req.headers;
    const consumer = await Consumer.findOne({ user: user_id });

    if (consumer && consumer.username === username) {
      return res.json({ code: 201, msg: "Username already in use" });
    }

    const seller = await Seller.create({
      fantasy_name,
      cnpj,
      social_name,
      username,
      user: user_id
    });
    await seller.populate("user").execPopulate();

    return res.json(seller);
  }
};
