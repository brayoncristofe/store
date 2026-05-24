const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/:user_id", cartController.show);
router.post("/:user_id/items", cartController.addItem);
router.delete("/:user_id/items/:item_id", cartController.removeItem);

module.exports = router;