const { Address } = require("../models");

async function index(req, res) {
    try {
        const addresses = await Address.findAll({
            where: { user_id: req.params.user_id }
        });
        res.json(addresses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const address = await Address.create({
            ...req.body,
            user_id: req.params.user_id
        });
        res.status(201).json(address);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const address = await Address.findByPk(req.params.id);
        if (!address) {
            return res.status(404).json({ error: "Endereço não encontrado" });
        }
        await address.update(req.body);
        res.json(address);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const address = await Address.findByPk(req.params.id);
        if (!address) {
            return res.status(404).json({ error: "Endereço não encontrado" });
        }
        await address.destroy();
        res.json({ message: "Endereço deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, create, update, remove };