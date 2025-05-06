const Joi = require("joi");
const mongoose = require("mongoose");

module.exports.createSchema = Joi.object({
  name: Joi.string().required().min(2).label("Name"),
  email: Joi.string().email().required().label("Email"),
  mobile: Joi.string()
    .required()
    .regex(/^[6789]\d{9}$/)
    .messages({
      "string.pattern.base": `{{#label}} must be a valid number`,
      "string.empty": `{{#label}} is required`,
    })
    .label("Mobile"),
  password: Joi.string().required().label("Password"),
});

module.exports.loginSchema = Joi.object({
  mobile: Joi.string()
    .required()
    .regex(/^[6789]\d{9}$/)
    .messages({
      "string.pattern.base": `{{#label}} must be a valid number`,
      "string.empty": `{{#label}} is required`,
    })
    .label("Mobile"),
  password: Joi.string().required().label("Password"),
});

module.exports.findAllSchema = Joi.object({
  searchQuery: Joi.string().allow("").label("Search Query"),
  limit: Joi.string().allow("").label("Limit"),
  page: Joi.string().allow("").label("Page"),
  status: Joi.string().allow("").label("Status"),
});

module.exports.updateSchema = Joi.object({
  name: Joi.string().min(2).label("Name"),
  email: Joi.string().email().label("Email"),
  mobile: Joi.string().label("Mobile"),
  password: Joi.string().allow("").label("Password"),
  status: Joi.string().label("Status"),
});

module.exports.updateSchema = Joi.object({
  name: Joi.string().min(2).label("Name"),
  email: Joi.string().email().label("Email"),
  mobile: Joi.string().label("Mobile"),
  password: Joi.string().label("Password"),
  status: Joi.string().label("Status"),
});

module.exports.idSchema = Joi.object({
  id: Joi.string().custom(function (value, helper) {
    let isValid = mongoose.Types.ObjectId.isValid(value);
    if (isValid) return true;
    return helper.message("Id is not a mongodb id");
  }),
});
