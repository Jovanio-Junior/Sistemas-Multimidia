const express = require("express");
const routes = express.Router();
const assistir = require('../../controllers/rotas_privadas/assistir');
const routesNames = require("./routes_Names");
const consultas = require('../../database/consultas.js')

routes.get(routesNames.PRIVATE_ROUTE_ASSISTIR, consultas.verificar_login ,assistir);
// routes.get(routesNames.PRIVATE_ROUTE_ASSISTIR,assistir);
module.exports = routes;