// Arranque del Servidor
import app from './src/app.js';
import sequelize from './src/config/db.config.js';

const PORT = process.env.PORT || 3000; // si no se encuentra la variable de entorno PORT, se usará el puerto 3000 por defecto

app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});



// Prueba de conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la BD establecida');
    } catch (error) {
        console.log(error);
        console.log('Error de conexión a la BD');
    }
})();
