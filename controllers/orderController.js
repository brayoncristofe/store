const { Order, OrderItem, Product } = require("../models");

async function index(req, res) {
    try {
        const orders = await Order.findAll({
            where: { user_id: req.params.user_id },
            include: [{
                model: OrderItem,
                include: [Product]
            }]
        });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show(req, res) {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: [{
                model: OrderItem,
                include: [Product]
            }]
        });
        if (!order) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const { user_id, items, total } = req.body;

        const order = await Order.create({ user_id, total });

        // Cria os itens do pedido
        const orderItems = items.map(item => ({
            order_id: order.id,
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price
        }));

        await OrderItem.bulkCreate(orderItems);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateStatus(req, res) {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }
        await order.update({ status: req.body.status });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, show, create, updateStatus };