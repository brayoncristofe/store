const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Category = sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: "categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
});

module.exports = Category;