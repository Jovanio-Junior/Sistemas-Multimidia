const jwt = require('jsonwebtoken')
const dbConfig = require('../../models/index')
const secretKey = require('../../config/jwt/secretKey')
const jwtOption = require('../../config/jwt/options')
const { getDatabase, ref, onValue } = require('firebase/database')


function login(req, res) {
    console.log("Post -> /login ");

    try {
        if (req.body.login.email && req.body.login.senha) {
            var db = getDatabase()
            mail = req.body.login.email.split(".")
            const aux = ref(db, 'users/' + mail[0]+mail[1])
            onValue(aux, (snapshot) => {
                const data = snapshot.val()
                if (data) {
                    if (data.senha == req.body.login.senha) {
                        var result = Math.random().toString(36).substr(2, 99);
                        jwt.sign(
                            {
                              email: data.email,
                              cifra: result,
                              data: Date.now(),
                            },
                            secretKey,
                            { ...jwtOption.sign },
                            (err, token) => {
                              if (!err) {
                                console.log({
                                  status: "token gerado!",
                                  token: token,
                                  result: result,
                                  data: Date.now(),
                                });
                                res.statusCode = 200;
                                res.send({
                                    statusCode: 200,
                                    mensagem: "sucesso",
                                    Authorization: "Bearer " + token
                                });
                              } else {
                                console.log(err);
                                res.statusCode = 500;
                                res.send({ err: "Erro interno do servidor" });
                              }
                            }
                          );
                    } else {
                        res.status(400)
                        res.json({
                        erro: "Senha invalida"
                        })
                    }
                } else {
                    res.status(400)
                    res.json({
                        erro: "Usuario não encontrado"
                    })
                }
            })
            
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
        console.log('erro')
    }
}

module.exports = login