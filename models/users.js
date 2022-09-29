'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Children, { foreignKey: "UserId" });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    domisili: DataTypes.STRING,
    motherName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    hometown: DataTypes.STRING,
    partnerName: DataTypes.STRING,
    partnerFrom: DataTypes.STRING,
    childs: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};