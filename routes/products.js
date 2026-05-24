const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const productImageController = require("../controllers/productImageController");
const productVariantController = require("../controllers/productVariantController");

// Produtos
router.get("/", productController.index);
router.get("/:id", productController.show);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

// Imagens do produto
router.get("/:product_id/images", productImageController.index);
router.post("/:product_id/images", productImageController.create);
router.delete("/:product_id/images/:id", productImageController.remove);

// Variações do produto
router.get("/:product_id/variants", productVariantController.index);
router.post("/:product_id/variants", productVariantController.create);
router.put("/:product_id/variants/:id", productVariantController.update);
router.delete("/:product_id/variants/:id", productVariantController.remove);

module.exports = router;