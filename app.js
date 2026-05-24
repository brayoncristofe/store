require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// Rotas
app.use("/auth",      require("./routes/auth"));
app.use("/users",     require("./routes/users"));
app.use("/categories",require("./routes/categories"));
app.use("/colors",    require("./routes/colors"));
app.use("/sizes",     require("./routes/sizes"));
app.use("/products",  require("./routes/products"));
app.use("/addresses", require("./routes/addresses"));
app.use("/cart",      require("./routes/cart"));
app.use("/orders",    require("./routes/orders"));
app.use("/wishlist",  require("./routes/wishlist"));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});

module.exports = app;