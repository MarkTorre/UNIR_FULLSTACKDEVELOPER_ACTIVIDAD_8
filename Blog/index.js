
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'my first API' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});