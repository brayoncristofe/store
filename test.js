const categoryModel = require("./models/categoryModel");
const colorModel = require("./models/colorModel");
const sizeModel = require("./models/sizeModel");
const userModel = require("./models/userModel");

// Testando categoryModel
categoryModel.getAll(function(err, results) {
    if (err) {
        console.error("❌ categoryModel falhou:", err.message);
    } else {
        console.log("✅ categoryModel funcionando! Resultados:", results);
    }
});

// Testando colorModel
colorModel.getAll(function(err, results) {
    if (err) {
        console.error("❌ colorModel falhou:", err.message);
    } else {
        console.log("✅ colorModel funcionando! Resultados:", results);
    }
});

// Testando sizeModel
sizeModel.getAll(function(err, results) {
    if (err) {
        console.error("❌ sizeModel falhou:", err.message);
    } else {
        console.log("✅ sizeModel funcionando! Resultados:", results);
    }
});

// Testando userModel
userModel.getAll(function(err, results) {
    if (err) {
        console.error("❌ userModel falhou:", err.message);
    } else {
        console.log("✅ userModel funcionando! Resultados:", results);
    }
});