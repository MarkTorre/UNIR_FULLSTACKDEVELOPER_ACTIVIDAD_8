// Configuración de la API Express
import express from 'express';
import cors from 'cors';
import posts from './routes/posts.routes.js';
import autors from './routes/autors.routes.js';    

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use('/api', autors);
app.use('/api', posts);


export default app;


