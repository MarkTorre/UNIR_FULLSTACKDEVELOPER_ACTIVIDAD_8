import Autor from './autors.model.js';
import Post from './posts.model.js';

// Definimos la relación entre Autor y Post
Autor.hasMany(Post, { foreignKey: 'fk_autors', as: 'posts' });
Post.belongsTo(Autor, { foreignKey: 'fk_autors', as: 'autor' });

export { Autor, Post };