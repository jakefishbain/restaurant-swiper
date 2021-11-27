'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sessions.hasMany(models.users, { 
        foreignKey: 'sessionId', 
        as: 'users' 
      });
      sessions.hasMany(models.choices, { 
        foreignKey: 'sessionId', 
        as: 'choices' 
      });
    }
  };
  sessions.init({
    code: DataTypes.INTEGER,
    resultType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sessions',
  });
  return sessions;
};