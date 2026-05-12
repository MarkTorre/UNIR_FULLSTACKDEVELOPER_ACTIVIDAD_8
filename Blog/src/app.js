// Configuración de la API Express
import express from 'express';
import cors from 'cors';
import posts from './routes/posts.routes.js';
import autors from './routes/autors.routes.js';    
import httpStatus from './config/db.config.js';

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use('/api', autors);
app.use('/api', posts);

// Errores no especificados del servidor
app.use((err, req, res, next) => {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Error interno del servidor' });
});

export default app;


