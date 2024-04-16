'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aadhar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Aadhar.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      Number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Aadhar',
    },
  );
  return Aadhar;
};
