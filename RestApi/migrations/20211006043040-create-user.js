'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        validate: {
          notEmpty: true
        },
        unique: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        validate: {
          isEmail:true,
          notEmpty: true
        },
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        validate: {
          notEmpty: true
        },
        type: Sequelize.STRING
      },
      first_name: {
        allowNull: false,
        validate: {
          notEmpty: true
        },
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};