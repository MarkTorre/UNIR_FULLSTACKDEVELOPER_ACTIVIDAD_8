import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Post = sequelize.define('posts', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date_creation: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  fk_autors: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Post;