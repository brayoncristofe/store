const { Category } = require("../models");

// Listar todas as categorias
async function index(req, res) {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Buscar categoria por ID
async function show(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Categoria não encontrada" });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Criar categoria
async function create(req, res) {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Editar categoria
async function update(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Categoria não encontrada" });
        }
        await category.update(req.body);
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Deletar categoria
async function remove(req, res) {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: "Categoria não encontrada" });
        }
        await category.destroy();
        res.json({ message: "Categoria deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, show, create, update, remove };