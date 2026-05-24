const { Wishlist, Product } = require("../models");

async function index(req, res) {
    try {
        const wishlist = await Wishlist.findAll({
            where: { user_id: req.params.user_id },
            include: [Product]
        });
        res.json(wishlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function add(req, res) {
    try {
        const item = await Wishlist.create({
            user_id: req.params.user_id,
            product_id: req.body.product_id
        });
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const item = await Wishlist.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        await item.destroy();
        res.json({ message: "Item removido dos favoritos" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, add, remove };