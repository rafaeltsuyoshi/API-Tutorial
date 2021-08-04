'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable("tutorial", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        published: {
          type: Sequelize.BOOLEAN
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tutorial');

  }
};
