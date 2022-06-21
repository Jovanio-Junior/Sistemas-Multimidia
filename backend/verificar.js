const listaDisponivel = require('./data.json')

function verificarFilme(req, res, next) {
    if (req.params.id)
    {
        var elemento = listaDisponivel.find(a => a.filme == req.params.id)
        if (elemento)
        {
            next()
        }
        else {
            res.status(400)
            res.send("Filme não encontrado na nossa base de dados") 
        }
        
    }
    else {
        res.status(400)
        res.send("Por favor informe o nome do filme")
    }
}
module.exports = verificarFilme