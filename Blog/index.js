
import express from 'express';

const app = express();

app.use(express.json()); 

app.get('/api', (req, res) => {
  res.send('Recibida solicitud GET en /api');
});

app.post('/api/:id', (req, res) => {
  const { id } = req.params;  
  res.send('Recibida solicitud POST en /api/' + id );
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});