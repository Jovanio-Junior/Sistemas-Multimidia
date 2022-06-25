const jwt = require('jsonwebtoken')
const dbConfig = require('../../models/index')
const secretKey = require('../../config/jwt/secretKey')
const jwtOption = require('../../config/jwt/options')
const { getDatabase, ref, set } = require('firebase/database')


async function cadastro(req, res) {
    console.log("Post -> /cadastro ");

    try {
        
        if (req.body.login.email && req.body.login.senha) {
            const db = getDatabase()
            var data = new Date();
            
            mail = req.body.login.email.split(".")
            aux = await set(ref(db, 'users/' + mail[0]+mail[1]), {
                email: req.body.login.email,
                senha: req.body.login.senha
            })
            res.status(200)
            res.send("asdf")
        }else {
            if (!req.body.login.email && !req.body.login.senha) {
                res.status(404)
                res.json({
                    erro: "Por favor informe o E-Mail e Senha"
                })
            } else {
                if (!req.body.login.email) {
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
        res.status(404)
            res.send({
                erro: "Por favor informe os dados de login"
            })
    }
    
}

module.exports = cadastro