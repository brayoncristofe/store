const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.get("/:user_id", addressController.index);
router.post("/:user_id", addressController.create);
router.put("/:user_id/:id", addressController.update);
router.delete("/:user_id/:id", addressController.remove);

module.exports = router;