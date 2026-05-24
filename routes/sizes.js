const express = require("express");
const router = express.Router();
const sizeController = require("../controllers/sizeController");

router.get("/", sizeController.index);
router.post("/", sizeController.create);
router.delete("/:id", sizeController.remove);

module.exports = router;