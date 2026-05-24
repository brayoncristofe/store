const { User } = require("../models");

async function index(req, res) {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["password"] }
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show(req, res) {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ["password"] }
        });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        await user.update(req.body);
        res.json({ message: "Usuário atualizado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function remove(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        await user.destroy();
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { index, show, update, remove };