const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors()); // Agrega esta línea para habilitar CORS



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/escribirArchivo', (req, res) => {
  const palabra = req.body.palabra + '\n';

  fs.appendFile('usuarios.txt', palabra, (err) => {
    if (err) {
      console.log('Error al escribir en el archivo:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});