const jwt = require('jsonwebtoken')
const consultas = require('../../database/consultas.js')
const secretKey = require('../../config/jwt/secretKey.js')
const jwtOption = require('../../config/jwt/options.js')


async function redefinir_senha(req, res) {
    console.log("Post -> /redefinir senha ");
    try {
        if (req.body.login.usuario && req.body.login.nova_senha) {
            validar_login = await consultas.resetar_senha(req.body.login.usuario,req.body.login.nova_senha)
            if(validar_login){
                res.status(200)
                res.json({
                    erro: "senha alterada com sucesso, ja pode fazer login"
                })
            } else {
                res.status(404)
                res.json({
                    erro: "algo de errado não esta certo."
                })
            }
        }else {
            if (!req.body.login.usuario && !req.body.login.nova_senha) {
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

module.exports = redefinir_senha