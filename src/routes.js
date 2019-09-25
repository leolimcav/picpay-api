const route = require("express").Router;
const UserController = require("./controller/UserController");
const routes = route();

// Cadastra uma nova transação entre usuários
routes.post("/transacations", (req, res) => {});

// Retorna detalhes de uma transação
routes.get("/transactions/:transaction_id", (req, res) => {});

// Retorna todos os usuarios em ordem alfabetica
routes.get("/users", UserController.index);

// Retorna dados de um usuário com base no ID
routes.get("/users/:id", UserController.findUserById);

// Cadastra um novo usuário
routes.post("/users", UserController.store);

// Cadastra um novo usuário consumidor
routes.post("/users/consumers", (req, res) => {});

// Cadastra um novo usuário lojista
routes.post("/users/sellers", (req, res) => {});

routes.delete("/users/:id", UserController.destroy);

module.exports = routes;
