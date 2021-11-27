'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.groups, { 
        foreignKey: 'userId', 
        through: 'users_choices', 
        as: 'choices' 
      });
    }
  };
  users.init({
    name: DataTypes.STRING,
    sessionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};