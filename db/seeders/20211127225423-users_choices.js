'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users_Choices", [
      {
        userId: 1,
        choiceId: 1,
        selected: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users_Choices", null, {});
  }
};
