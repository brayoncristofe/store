const db = require("../database/connection");

function getAll(callback) {
    db.query("SELECT * FROM colors", callback);
}

function getById(id, callback) {
    db.query("SELECT * FROM colors WHERE id = ?", [id], callback);
}

function create(data, callback) {
    db.query("INSERT INTO colors (name, hex_code) VALUES (?, ?)", [data.name, data.hex_code], callback);
}

function remove(id, callback) {
    db.query("DELETE FROM colors WHERE id = ?", [id], callback);
}

module.exports = { getAll, getById, create, remove };