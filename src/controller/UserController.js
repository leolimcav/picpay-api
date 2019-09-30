const UserModel = require("../model/UserModel");

module.exports = {
  async index(req, res) {
    if (req.query.name !== undefined) {
      const Users = await UserModel.find().where({
        full_name: { $regex: `${req.query.name}.*`, $options: "-i" }
      });
      return res.json(Users);
    }
    const Users = await UserModel.find().sort({ full_name: "asc" });
    if (res.statusCode === 200) return res.json(Users);
    else if (res.statusCode === 500)
      return res.send("Status 500: Erro interno do servidor!");
  },
  async findUserById(req, res) {
    const User = await UserModel.findById(req.params.id);
    return res.json(User);
  },
  async store(req, res) {
    const newUser = req.body;
    await UserModel.create(newUser);
    return res.json(res.statusCode);
  },
  async destroy(req, res) {
    await UserModel.findByIdAndDelete(req.params.id);
    res.statusCode = 204;
    return res.json(res.statusCode);
  },
  async update(req, res) {
    const updatedUser = req.body;
    await UserModel.findByIdAndUpdate(req.params.id, updatedUser);
    res.json(updatedUser);
  }
};
