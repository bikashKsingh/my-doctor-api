const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {
  createSchema,
  updateSchema,
  idSchema,
  loginSchema,
} = require("../joiSchemas/adminValidationSchema");

const joiValidation = require("../middlewares/joiValidation");

router.post(
  "/",
  joiValidation.validate(createSchema, "body"),
  adminController.create
);

router.post(
  "/login",
  joiValidation.validate(loginSchema, "body"),
  adminController.login
);

router.get("/", adminController.findAll);

router.get(
  "/:id",
  joiValidation.validate(idSchema, "params"),
  adminController.findOne
);

router.put(
  "/:id",
  joiValidation.validate(idSchema, "params"),
  joiValidation.validate(updateSchema, "body"),
  adminController.update
);
router.delete(
  "/:id",
  joiValidation.validate(idSchema, "params"),
  adminController.delete
);

module.exports = router;
