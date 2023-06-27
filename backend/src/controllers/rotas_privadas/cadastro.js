const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const secretKey = require('../../config/jwt/secretKey');
const jwtOption = require('../../config/jwt/options');
const consultas = require('../../database/consultas.js')


async function cadastro(req, res) {
    console.log("Post -> /cadastro");
    try {
        if (req.body.login.usuario && req.body.login.senha) {
            var data = new Date();

            const usuario = req.body.login.usuario;
            const senha = req.body.login.senha;
            // Verifica se o usuário já existe
            const usuarioExistente = await consultas.usuario_existe(usuario)
            if(usuarioExistente) {
                res.status(404)
                res.json({
                    erro: "Usuario já existe"
                })
            } else {
                const cadastrouUsuario = await consultas.cadastrar_usuario(usuario,senha)
                if(cadastrouUsuario){  
                    res.status(200);
                    res.json({
                        sucesso: "Usuario cadastrado Com sucesso!"
                    });
                }else {
                    res.status(500)
                    res.json({
                        erro: "algo de errado não esta certo."
                    })
                }
            }
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
