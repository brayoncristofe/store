const db = require("../database/connection");

function getAll(callback) {
    db.query("SELECT id, name, email, role, created_at FROM users", callback);
}

function getById(id, callback) {
    db.query("SELECT id, name, email, role, created_at FROM users WHERE id = ?", [id], callback);
}

function getByEmail(email, callback) {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
}

function create(data, callback) {
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.name, data.email, data.password, data.role || "customer"], callback);
}

function update(id, data, callback) {
    const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    db.query(sql, [data.name, data.email, id], callback);
}

function remove(id, callback) {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
}

module.exports = { getAll, getById, getByEmail, create, update, remove };