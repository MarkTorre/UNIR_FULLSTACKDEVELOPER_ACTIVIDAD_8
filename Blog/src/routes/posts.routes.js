import express from 'express';
import {createPost, getPost, getPostsByAutor} from '../controllers/posts.controller.js';

const router = express.Router();

// Rutas GET
router.get('/posts/:id', getPost);
router.get('/posts/autor/:id', getPostsByAutor);

// Rutas POST
router.post('/posts', createPost);

export default router;