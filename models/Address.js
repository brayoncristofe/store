const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(200)
    },
    city: {
        type: DataTypes.STRING(100)
    },
    state: {
        type: DataTypes.STRING(50)
    },
    zip_code: {
        type: DataTypes.STRING(20)
    }
}, {
    tableName: "addresses",
    timestamps: false
});

module.exports = Address;