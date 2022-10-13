// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Connect with foreign key found in products to the primary key in category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
// Set up association of products to categories by category_id in product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
// Setup association between product and tag from the producttag model and a product can be connected to many tags
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  as: 'tags',
  foreignKey: "product_id"
});

// Tags belongToMany Products (through ProductTag)
// Setup association between product and tag from the producttag model and a tag can be connected to many products
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  },
  as: 'products',
  foreignKey: "tag_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
