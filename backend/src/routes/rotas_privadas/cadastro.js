const express = require("express");
const routes = express.Router();
const cadastro = require('../../controllers/rotas_privadas/cadastro');
const routesNames = require("./routes_Names");

routes.post(routesNames.PRIVATE_ROUTE_CADASTRO, cadastro);

module.exports = routes;