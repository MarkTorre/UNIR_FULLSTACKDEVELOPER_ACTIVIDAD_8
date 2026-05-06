import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Autor = sequelize.define('autors', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  timestamps: false
});

export default Autor;