const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers");

router.get("/players", controller.getPlayers);
router.get("/time", controller.getTime);
router.post("/time", controller.postTime);

module.exports = router;