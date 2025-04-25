const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.get("/", doctorController.create);

router.get("/create", (req, res) => {
  res.send("Doctor Created");
});

module.exports = router;
