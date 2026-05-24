const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Color = sequelize.define("Color", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    hex_code: {
        type: DataTypes.STRING(7)
    }
}, {
    tableName: "colors",
    timestamps: false
});

module.exports = Color;