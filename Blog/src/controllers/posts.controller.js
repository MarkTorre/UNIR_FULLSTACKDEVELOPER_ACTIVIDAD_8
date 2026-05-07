import {Autor, Post} from '../models/index.model.js';
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
    // Obtenemos el post por su id

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
    res.send('get All Autor Posts de la base de datos');
}