'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username tidak boleh kosong!'
        }
      },
      unique: {
        args: true,
        msg: 'Username sudah di gunakan!'
      },
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      validate: {
        isEmail:{
          args: true,
          msg: 'Format Email Salah!'
        },
        notEmpty: {
          args: true,
          msg: 'Email tidak boleh kosong!'
        }
      },
      unique: {
        args: true,
        msg: 'Email sudah di gunakan!'
      },
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password tidak boleh kosong!'
        }
      },
      type: DataTypes.STRING
    },
    first_name: {
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Firstname tidak boleh kosong!'
        }
      },
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    province: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};