const { Color } = require("../models");

async function index(req, res) {
    try {
        const colors = await Color.findAll();
        res.json(colors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const color = await Color.create(req.body);
        res.status(201).json(color);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const color = await Color.findByPk(req.params.id);
        if (!color) {
            return res.status(404).json({ error: "Cor não encontrada" });
        }
        await color.destroy();
        res.json({ message: "Cor deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, create, remove };