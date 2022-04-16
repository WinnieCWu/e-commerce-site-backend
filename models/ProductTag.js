const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  {
    product_id: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    }
  },
  {
    tag_id: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = ProductTag;
