const { Size } = require("../models");

async function index(req, res) {
    try {
        const sizes = await Size.findAll();
        res.json(sizes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const size = await Size.create(req.body);
        res.status(201).json(size);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const size = await Size.findByPk(req.params.id);
        if (!size) {
            return res.status(404).json({ error: "Tamanho não encontrado" });
        }
        await size.destroy();
        res.json({ message: "Tamanho deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, create, remove };