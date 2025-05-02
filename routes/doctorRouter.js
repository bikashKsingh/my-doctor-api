const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const {
  createSchema,
  updateSchema,
  idSchema,
} = require("../joiSchemas/doctorValidationSchema");

const joiValidation = require("../middlewares/joiValidation");

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
  joiValidation.validate(idSchema, "params"),
  joiValidation.validateBody(updateSchema),
  doctorController.update
);
router.delete(
  "/:id",
  joiValidation.validate(idSchema, "params"),
  doctorController.delete
);

module.exports = router;
