const { Product, Category, ProductImage, ProductVariant, Color, Size } = require("../models");

async function index(req, res) {
    try {
        const products = await Product.findAll({
            include: [
                { model: Category },
                { model: ProductImage },
                {
                    model: ProductVariant,
                    include: [Color, Size]
                }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show(req, res) {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: [
                { model: Category },
                { model: ProductImage },
                {
                    model: ProductVariant,
                    include: [Color, Size]
                }
            ]
        });
        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        await product.update(req.body);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        await product.destroy();
        res.json({ message: "Produto deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, show, create, update, remove };