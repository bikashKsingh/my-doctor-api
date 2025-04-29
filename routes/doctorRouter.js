const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.post("/", doctorController.create);

module.exports = router;
