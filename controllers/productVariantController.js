const { ProductVariant, Color, Size } = require("../models");

async function index(req, res) {
    try {
        const variants = await ProductVariant.findAll({
            where: { product_id: req.params.product_id },
            include: [Color, Size]
        });
        res.json(variants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const variant = await ProductVariant.create({
            ...req.body,
            product_id: req.params.product_id
        });
        res.status(201).json(variant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const variant = await ProductVariant.findByPk(req.params.id);
        if (!variant) {
            return res.status(404).json({ error: "Variação não encontrada" });
        }
        await variant.update(req.body);
        res.json(variant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const variant = await ProductVariant.findByPk(req.params.id);
        if (!variant) {
            return res.status(404).json({ error: "Variação não encontrada" });
        }
        await variant.destroy();
        res.json({ message: "Variação deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, create, update, remove };