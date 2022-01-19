const Joi = require("joi")

const validate = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email,
    password: Joi.string().min(5).max(255).required(),
  });
  
  module.exports = {
    validate,
  };