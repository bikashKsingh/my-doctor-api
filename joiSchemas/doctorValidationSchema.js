const Joi = require("joi");

module.exports.createSchema = Joi.object({
  name: Joi.string().required().min(2).label("Name"),
  email: Joi.string().email().required().label("Email"),
  mobile: Joi.string().required().label("Mobile"),
  address: Joi.string().allow("").label("Address"),
  specialist: Joi.string().required().label("Specialist"),
  password: Joi.string().allow("").label("Password"),
});
