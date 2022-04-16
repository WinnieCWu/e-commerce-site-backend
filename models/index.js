// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'productTag_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey:'productTag_id'
  //through ProductTag model
  references: {
    model: 'product',
    through: ProductTag,
    as: 'tag_id'
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
