const db = require("../database/connection");

function getAll(callback) {
    db.query("SELECT * FROM sizes", callback);
}

function getById(id, callback) {
    db.query("SELECT * FROM sizes WHERE id = ?", [id], callback);
}

function create(data, callback) {
    db.query("INSERT INTO sizes (name) VALUES (?)", [data.name], callback);
}

function remove(id, callback) {
    db.query("DELETE FROM sizes WHERE id = ?", [id], callback);
}

module.exports = { getAll, getById, create, remove };