const db = require("../database/connection");

function getAll(callback) {
    db.query("SELECT * FROM categories", callback);
}

function getById(id, callback) {
    db.query("SELECT * FROM categories WHERE id = ?", [id], callback);
}

function create(data, callback) {
    db.query("INSERT INTO categories (name) VALUES (?)", [data.name], callback);
}

function update(id, data, callback) {
    db.query("UPDATE categories SET name = ? WHERE id = ?", [data.name, id], callback);
}

function remove(id, callback) {
    db.query("DELETE FROM categories WHERE id = ?", [id], callback);
}

module.exports = { getAll, getById, create, update, remove };