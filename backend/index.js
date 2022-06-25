const express = require("express");
const fs = require('fs');
const middlewares = require("./src/config/middlewares");
const app = express();
const rotas = require('./src/routes/index')

app.use(...middlewares);
app.use(...rotas);

app.get("/filmes/:id",(req,res)=>{
  const path = `./src/assents/videos/${req.params.id}.mp4`
  fs.stat(path,(err,stats)=>{
      if(err)
      {
          console.log(err)
          return res.status(404).send("vídeo não encontrado")
      }
      const {range} = req.headers
      const {size} = stats
      const start = Number((range || '').replace(/bytes=/,'').split('-')[0])
      const end = size-1
      const chunkSize = (end-start)+1
      res.set({
          'Content-Range': `bytes ${start}-${end}/${size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'audio/mp4'
      })
      res.status(206)
      const stream = fs.createReadStream(path,{start,end})
      stream.on('open',()=>stream.pipe(res))
      stream.on('error',(err)=>stream.pipe(err))

  })
})

const host = "45.191.205.222";

const port = 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Servidor Inciado, escutando em:  ${host}:${port}`);
  } else {
    console.log(err);
  }
});