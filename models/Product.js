const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    category_id: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
});

module.exports = Product;