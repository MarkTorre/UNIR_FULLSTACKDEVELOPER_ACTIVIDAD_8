import express from 'express';
import {createPost, getPost, getAllAutorPosts} from '../controllers/posts.controller.js';

const router = express.Router();

// Rutas GET
router.get('/posts/:idPost', getPost);
router.get('/posts/:idAutor', getAllAutorPosts);

// Rutas POST
router.post('/posts/:idAutor', createPost);

export default router;