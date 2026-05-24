const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const ProductVariant = sequelize.define("ProductVariant", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    sku: {
        type: DataTypes.STRING(100),
        unique: true
    }
}, {
    tableName: "product_variants",
    timestamps: false
});

module.exports = ProductVariant;