const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const {
  createSchema,
  updateSchema,
  idSchema,
} = require("../joiSchemas/doctorValidationSchema");
const jwt = require("jsonwebtoken");
const joiValidation = require("../middlewares/joiValidation");
const validateJwtToken = require("../middlewares/validateJwtToken");

router.post(
  "/",
  joiValidation.validate(createSchema, "body"),
  doctorController.create
);

router.get("/", doctorController.findAll);

router.get(
  "/:id",
  joiValidation.validate(idSchema, "params"),
  doctorController.findOne
);

router.put(
  "/:id",
  validateJwtToken.validateAdminToken,
  joiValidation.validate(idSchema, "params"),
  joiValidation.validate(updateSchema, "body"),
  doctorController.update
);
router.delete(
  "/:id",
  validateJwtToken.validateAdminToken,
  joiValidation.validate(idSchema, "params"),
  doctorController.delete
);

module.exports = router;
