const express = require("express");
const routes = express.Router();
const login = require('../../controllers/rotas_privadas/login');
const routesNames = require("./routes_Names");

routes.post(routesNames.PRIVATE_ROUTE_LOGIN, login);

module.exports = routes;