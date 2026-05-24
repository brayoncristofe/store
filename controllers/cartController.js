const { Cart, CartItem, Product } = require("../models");

async function show(req, res) {
    try {
        let cart = await Cart.findOne({
            where: { user_id: req.params.user_id },
            include: [{
                model: CartItem,
                include: [Product]
            }]
        });

        // Se não tiver carrinho, cria um automaticamente
        if (!cart) {
            cart = await Cart.create({ user_id: req.params.user_id });
        }

        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function addItem(req, res) {
    try {
        let cart = await Cart.findOne({ where: { user_id: req.params.user_id } });

        if (!cart) {
            cart = await Cart.create({ user_id: req.params.user_id });
        }

        const { product_id, quantity } = req.body;

        // Verifica se o item já está no carrinho
        const existingItem = await CartItem.findOne({
            where: { cart_id: cart.id, product_id }
        });

        if (existingItem) {
            await existingItem.update({ quantity: existingItem.quantity + quantity });
            return res.json(existingItem);
        }

        const item = await CartItem.create({ cart_id: cart.id, product_id, quantity });
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function removeItem(req, res) {
    try {
        const item = await CartItem.findByPk(req.params.item_id);
        if (!item) {
            return res.status(404).json({ error: "Item não encontrado" });
        }
        await item.destroy();
        res.json({ message: "Item removido do carrinho" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { show, addItem, removeItem };