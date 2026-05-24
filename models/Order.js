const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("pending", "paid", "shipped", "delivered", "cancelled"),
        defaultValue: "pending"
    }
}, {
    tableName: "orders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
});

module.exports = Order;