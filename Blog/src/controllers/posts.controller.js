import { Autor, Post } from '../models/index.model.js';
import { httpStatus } from '../config/httpStatus.config.js';

export const createPost = async (req, res, next) => {
   try {
        // Obtenemos los datos del cuerpo de la solicitud
        const { title, description, category, fk_autors } = req.body;

        // Validamos que se hayan proporcionado todos los campos necesarios
        if (!title || !description || !category || !fk_autors) {
            return res.status(httpStatus.BAD_REQUEST).json({ error: 'Todos los campos son obligatorios' });
        }

        // Comprobar si autor existe antes de insertar
        const autorExist = await Autor.findOne({ where: { id: fk_autors } });
        if( !autorExist) {
            return res.status(httpStatus.CONFLICT).json({ error: 'El autor no existe' });
        }

        // Creamos el nuevo post en la base de datos
        const post = await Post.create({ title, description, category, fk_autors });
        res.status(httpStatus.CREATED).json(post);

    } catch (error) {
        next(error);
    }
}

export const getPost = async (req, res, next) => {
    try {
    // Obtenemos el post por su id y juntamos la información del autor utilizando la asociación definida en el modelo
    const postWithAutor = await Post.findByPk(req.params.id, {
        attributes: {exclude: ['fk_autors']},
        include: {
            model: Autor,
            as: 'autor',
            attributes: ['id','name', 'email', 'image']
        }
    });

    // Verificamos si el post existe
    if (!postWithAutor){
      return res.status(httpStatus.NOT_FOUND).json({ error: 'Post no encontrado' });
    }

    res.status(httpStatus.OK).json(postWithAutor);

  } catch (error) {
    next(error);
  }
}

export const getPostsByAutor = async (req, res, next) => {
    try {
        // Obtenemos todos los posts de un autor específico
        const posts = await Post.findAll({
            where: { fk_autors: req.params.id },
        });

        // Informamos si no existe ningún post del autor
        if (!posts.length){
            return res.status(httpStatus.NOT_FOUND).json({ error: 'El autor no tiene ningún post' });
        }

        res.status(httpStatus.OK).json(posts);
    } catch (error) {
        next(error);
    }
}
