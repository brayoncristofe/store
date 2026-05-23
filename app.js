const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("seja bem vindo")
});

app.get("/showcasegit",function(req,res){
    db.query("SELECT * FROM products", function(err, results) {
        if (err) {
            return res.status(500).json({ error: "Erro ao buscar produtos" });
        }

        res.json(results);
    });
});

app.listen(3306,function(){
    console.log('seja bem vindo')
});

