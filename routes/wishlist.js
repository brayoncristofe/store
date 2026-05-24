const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

router.get("/:user_id", wishlistController.index);
router.post("/:user_id", wishlistController.add);
router.delete("/:user_id/:id", wishlistController.remove);

module.exports = router;