const jwt = require('jsonwebtoken')
const consultas = require('../../database/consultas.js')
const secretKey = require('../../config/jwt/secretKey')
const jwtOption = require('../../config/jwt/options')


async function login(req, res) {
    console.log("Post -> /login ");
    try {
        console.log(req.body.login)
        if (req.body.login.usuario && req.body.login.senha) {
            validar_login = await consultas.login(req.body.login.usuario,req.body.login.senha)
            if(validar_login){
                res.status(200)
                res.json({
                    sucesso: "Login feito com sucesso, Aproveite"
                })
            } else {
                res.status(404)
                res.json({
                    erro: "usuario ou senha incorretos"
                })
            }
        }else {
            if (!req.body.login.usuario && !req.body.login.senha) {
                res.status(404)
                res.json({
                    erro: "Por favor informe o E-Mail e Senha"
                })
            } else {
                if (!req.body.login.usuario) {
                    res.status(404)
                    res.json({
                        erro: "Por favor informe o E-Mail"
                    })
                }
                else {
                    res.status(404)
                    res.json({
                        erro: "Por favor informe a Senha"
                    })
                }
            }
        }
    } catch (e) {
        console.log('erro')
    }
}

module.exports = login