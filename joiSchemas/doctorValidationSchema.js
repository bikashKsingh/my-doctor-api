const Joi = require("joi");
const mongoose = require("mongoose");

module.exports.createSchema = Joi.object({
  name: Joi.string().required().min(2).label("Name").messages({
    "string.base": `{{#label}} should be a type of string`,
    "string.empty": `{{#label}} must contain value`,
    "string.pattern.base": `{{#label}} must be 10 digit number`,
    "any.required": `{{#label}} is a required field`,
  }),
  email: Joi.string().email().required().label("Email"),
  mobile: Joi.string().required().label("Mobile"),
  address: Joi.string().allow("").label("Address"),
  specialist: Joi.string().required().label("Specialist"),
  password: Joi.string().allow("").label("Password"),
  status: Joi.string().allow("").label("Status"),
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
  address: Joi.string().allow("").label("Address"),
  specialist: Joi.string().label("Specialist"),
  password: Joi.string().allow("").label("Password"),
  status: Joi.string().label("Status"),
});

module.exports.updateSchema = Joi.object({
  name: Joi.string().min(2).label("Name"),
  email: Joi.string().email().label("Email"),
  mobile: Joi.string().label("Mobile"),
  address: Joi.string().allow("").label("Address"),
  specialist: Joi.string().label("Specialist"),
  password: Joi.string().allow("").label("Password"),
  status: Joi.string().label("Status"),
});

module.exports.idSchema = Joi.object({
  id: Joi.string().custom(function (value, helper) {
    let isValid = mongoose.Types.ObjectId.isValid(value);
    if (isValid) return true;
    return helper.message("Id is not a mongodb id");
  }),
});
