// Arranque del Servidor
import app from './src/app.js';

const PORT = process.env.PORT || 3000; // si no se encuentra la variable de entorno PORT, se usará el puerto 3000 por defecto

app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});