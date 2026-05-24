const sequelize = require("../database/connection");

const Category = require("./Category");
const User = require("./User");
const Product = require("./Product");
const Color = require("./Color");
const Size = require("./Size");
const ProductImage = require("./ProductImage");
const ProductVariant = require("./ProductVariant");
const Address = require("./Address");
const Cart = require("./Cart");
const CartItem = require("./CartItem");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Wishlist = require("./Wishlist");

// Relacionamentos
Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

Product.hasMany(ProductImage, { foreignKey: "product_id" });
ProductImage.belongsTo(Product, { foreignKey: "product_id" });

Product.hasMany(ProductVariant, { foreignKey: "product_id" });
ProductVariant.belongsTo(Product, { foreignKey: "product_id" });
ProductVariant.belongsTo(Color, { foreignKey: "color_id" });
ProductVariant.belongsTo(Size, { foreignKey: "size_id" });

User.hasMany(Address, { foreignKey: "user_id" });
Address.belongsTo(User, { foreignKey: "user_id" });

User.hasOne(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });
Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });
CartItem.belongsTo(Product, { foreignKey: "product_id" });

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });
Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

User.hasMany(Wishlist, { foreignKey: "user_id" });
Wishlist.belongsTo(User, { foreignKey: "user_id" });
Wishlist.belongsTo(Product, { foreignKey: "product_id" });

module.exports = {
    sequelize,
    Category, User, Product,
    Color, Size,
    ProductImage, ProductVariant,
    Address, Cart, CartItem,
    Order, OrderItem, Wishlist
};