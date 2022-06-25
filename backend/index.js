const express = require("express");
const fs = require('fs');
const middlewares = require("./src/config/middlewares");
const app = express();
const rotas = require('./src/routes/index')

app.use(...middlewares);
app.use(...rotas);

const host = "localhost";

const port = 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Servidor Inciado, escutando em:  ${host}:${port}`);
  } else {
    console.log(err);
  }
});