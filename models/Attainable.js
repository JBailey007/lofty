const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attainable extends Model {}

Attainable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    attainable_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    lofty_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'lofty',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attainable',
  }
);

module.exports = Attainable;
