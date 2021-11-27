'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "users", // name of Source model
      "sessionId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "sessions", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "users", // name of Source model
      "sessionId" // key we want to remove
    );
  }
};
