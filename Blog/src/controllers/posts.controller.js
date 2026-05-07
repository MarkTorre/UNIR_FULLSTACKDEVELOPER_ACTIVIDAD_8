
export const createPost = async (req, res, next) => {
   res.send('Crear Post en la base de datos'); 
}

export const getPost = async (req, res, next) => {
    res.send('get Post de la base de datos');
}

export const getPostsByAutor = async (req, res, next) => {
    res.send('get All Autor Posts de la base de datos');
}