const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/:user_id", orderController.index);
router.get("/detail/:id", orderController.show);
router.post("/", orderController.create);
router.patch("/:id/status", orderController.updateStatus);

module.exports = router;