const route = require("express").Router;
const UserController = require("./controller/UserController");
const ConsumerController = require("./controller/ConsumerController");
const SellerController = require("./controller/SellerController");

const routes = route();

// ------------- Transactions -------------------------------------
// Cadastra uma nova transação entre usuários
routes.post("/transacations", (req, res) => {});

// Retorna detalhes de uma transação
routes.get("/transactions/:transaction_id", (req, res) => {});

// ------------ Users ---------------------------------------------
// Retorna todos os usuarios em ordem alfabetica
routes.get("/users", UserController.index);

// Retorna dados de um usuário com base no ID
routes.get("/users/:id", UserController.findUserById);

// Cadastra um novo usuário
routes.post("/users", UserController.store);

// Atualiza as informações de um usuário
routes.put("/users/:id", UserController.update);

// Cadastra um novo usuário consumidor
routes.post("/users/consumers", ConsumerController.store);

// Cadastra um novo usuário lojista
routes.post("/users/sellers", SellerController.store);

routes.delete("/users/:id", UserController.destroy);

module.exports = routes;
