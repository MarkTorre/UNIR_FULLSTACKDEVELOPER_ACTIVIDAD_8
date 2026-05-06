import express from 'express';
import {createAutor, getAutor} from '../controllers/autors.controller.js';

const router = express.Router();

// Rutas GET
router.get('/autor', getAutor);

// Rutas POST
router.post('/autor', createAutor);

export default router;