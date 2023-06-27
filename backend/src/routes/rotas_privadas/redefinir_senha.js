const express = require("express");
const routes = express.Router();
const redefinir_senha = require('../../controllers/rotas_privadas/redefinir_senha');
const routesNames = require("./routes_Names");

routes.post(routesNames.PRIVATE_ROUTE_REDEFINIR_SENHA, redefinir_senha);

module.exports = routes;