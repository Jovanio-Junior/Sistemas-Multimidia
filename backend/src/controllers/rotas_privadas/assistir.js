const fs = require('fs');

function assistir(req, res) {
    const path = `./src/assents/videos/${req.params.id}.mp4`;
    fs.stat(path, (err, stats) => {
    if (err) {
      console.log(err);
      return res.status(404).json({
        erro: "vídeo não encontrado"
      });
    }
    const { range } = req.headers;
    const { size } = stats;
    const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
    const end = size - 1;
    const chunkSize = (end - start) + 1;
    res.set({
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'audio/mp4'
    });
    res.status(206);
    const stream = fs.createReadStream(path, { start, end });
    stream.on('open', () => stream.pipe(res));
    stream.on('error', (err) => {
      console.log(err);
      res.status(500).send("Erro ao ler o vídeo");
    });
  });
}

module.exports = assistir