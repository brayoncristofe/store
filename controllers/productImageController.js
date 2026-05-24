const { ProductImage } = require("../models");

async function index(req, res) {
    try {
        const images = await ProductImage.findAll({
            where: { product_id: req.params.product_id }
        });
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const image = await ProductImage.create({
            ...req.body,
            product_id: req.params.product_id
        });
        res.status(201).json(image);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const image = await ProductImage.findByPk(req.params.id);
        if (!image) {
            return res.status(404).json({ error: "Imagem não encontrada" });
        }
        await image.destroy();
        res.json({ message: "Imagem deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, create, remove };