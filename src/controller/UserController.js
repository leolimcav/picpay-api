const User = require("../model/UserModel");

module.exports = {
  async index(req, res) {
    if (req.query.name !== undefined) {
      const Users = await User.find().where({
        full_name: { $regex: `${req.query.name}.*`, $options: "-i" }
      });
      return res.json(Users);
    }
    const Users = await User.find().sort({ full_name: "asc" });
    if (res.statusCode === 200) return res.json(Users);
    else if (res.statusCode === 500)
      return res.send("Status 500: Erro interno do servidor!");
  },
  async findUserById(req, res) {
    const User = await User.findById(req.params.id);
    return res.json(User);
  },
  async store(req, res) {
    const { full_name, cpf, email, password, phone_number } = req.body;
    const user = await User.create({
      full_name,
      cpf,
      email,
      password,
      phone_number
    });
    return res.json(user);
  },
  async destroy(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.json(user);
  },
  async update(req, res) {
    const { full_name, cpf, email, password, phone_number } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      full_name,
      cpf,
      email,
      password,
      phone_number
    });
    res.json(updatedUser);
  }
};
