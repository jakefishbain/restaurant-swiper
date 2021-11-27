'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class choices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      choices.belongsToMany(models.users, {
        foreignKey: 'choiceId', 
        through: 'users_choices',
        as: 'users' 
      });
    }
  };
  choices.init({
    option: DataTypes.STRING,
    sessionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'choices',
  });
  return choices;
};