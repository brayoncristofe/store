const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Cart = sequelize.define("Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "cart",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
});

module.exports = Cart;