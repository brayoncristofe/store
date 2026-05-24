const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "Usuário criado com sucesso!", id: user.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Senha incorreta" });
        }

        res.json({ message: "Login realizado com sucesso!", user_id: user.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;