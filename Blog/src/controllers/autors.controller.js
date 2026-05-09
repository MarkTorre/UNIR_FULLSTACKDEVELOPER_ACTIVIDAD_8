
import { Autor } from '../models/index.model.js';
import { httpStatus } from '../config/httpStatus.config.js';

export const createAutor = async (req, res, next) => {
    try {
        // Obtenemos los datos del cuerpo de la solicitud
        const { name, email, image } = req.body;

        // Validamos que se hayan proporcionado 
        // todos los campos necesarios
        if (!name || !email || !image) {
            return res.status(httpStatus.BAD_REQUEST).json({ error: 'Todos los campos son obligatorios' });
        }

        // Comprobar si el email ya existe antes de insertar
        const autorExist = await Autor.findOne({ where: { email } });
        if( autorExist) {
            return res.status(httpStatus.CONFLICT).json({ error: 'El email ya existe' });
        }

        // Creamos el nuevo autor en la base de datos
        const autor = await Autor.create({ name, email, image });
        res.status(httpStatus.CREATED).json(autor);

    } catch (error) {
        next(error);
    }
}

export const getAutor = async (req, res, next) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    console.log(autor);
    if (!autor){
      return res.status(httpStatus.NOT_FOUND).json({ error: 'Autor no encontrado' });
    }

    res.status(httpStatus.OK).json(autor);

  } catch (error) {
    next(error);
  }
};