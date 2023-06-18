const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const secretKey = require('../../config/jwt/secretKey');
const jwtOption = require('../../config/jwt/options');

async function cadastro(req, res) {
    console.log("Post -> /cadastro");

    try {
        if (req.body.login.usuario && req.body.login.senha) {
            const db = getDatabase();
            var data = new Date();

            const usuario = req.body.login.usuario;
            const senha = req.body.login.senha;

            const bancoLocalPath = path.join(__dirname, '../../src/database/banco_local.json');
            const dataObj = {
                usuario: usuario,
                senha: senha
            };

            fs.writeFileSync(bancoLocalPath, JSON.stringify(dataObj));

            res.status(200);
            res.send("asdf");
        } else {
            if (!req.body.login.usuario && !req.body.login.senha) {
                res.status(404);
                res.json({
                    erro: "Por favor informe o E-Mail e Senha"
                });
            } else {
                if (!req.body.login.usuario) {
                    res.status(404);
                    res.json({
                        erro: "Por favor informe o E-Mail"
                    });
                } else {
                    res.status(404);
                    res.json({
                        erro: "Por favor informe a Senha"
                    });
                }
            }
        }
    } catch (e) {
        res.status(404);
        res.send({
            erro: "Por favor informe os dados de login"
        });
    }
}

module.exports = cadastro;
