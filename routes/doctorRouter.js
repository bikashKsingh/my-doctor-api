const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const { createSchema } = require("../joiSchemas/doctorValidationSchema");
const { serverResponse } = require("../constants/serverResponse");
const _ = require("lodash");
router.post(
  "/",

  function (req, res, next) {
    let body = req.body;

    const validatioResponse = createSchema.validate(body, {
      abortEarly: false,
    });
    if (validatioResponse.error) {
      let errors = validatioResponse.error.details;

      let modifiedError = {};

      for (let err of errors) {
        let message = err.message;
        let path = err.context.key;

        modifiedError[path] = message;
      }

      let response = _.cloneDeep(serverResponse);
      response.errors = modifiedError;
      response.message = "Validation failed";

      delete response.isOkey;

      res.status(response.statusCode).send(response);
    } else {
      next();
    }
  },

  doctorController.create
);
router.get("/", doctorController.findAll);
router.get("/:id", doctorController.findOne);
router.put("/:id", doctorController.update);
router.delete("/:id", doctorController.delete);

module.exports = router;
