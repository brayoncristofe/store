const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Size = sequelize.define("Size", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    tableName: "sizes",
    timestamps: false
});

module.exports = Size;