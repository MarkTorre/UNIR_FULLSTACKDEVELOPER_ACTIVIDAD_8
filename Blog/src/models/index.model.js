// src/models/index.js
import Autor from './autors.model.js';
import Post from './posts.model.js';

// ← estas líneas son las que crean la asociación
Autor.hasMany(Post, { foreignKey: 'fk_autors', as: 'posts' });
Post.belongsTo(Autor, { foreignKey: 'fk_autors', as: 'autor' });

export { Autor, Post };