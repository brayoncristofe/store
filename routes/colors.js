const express = require("express");
const router = express.Router();
const colorController = require("../controllers/colorController");

router.get("/", colorController.index);
router.post("/", colorController.create);
router.delete("/:id", colorController.remove);

module.exports = router;