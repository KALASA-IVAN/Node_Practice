const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  })
);

// function validateUser(user) {
//   const schema = {
//     name: Joi.string().min(5).max(50).required(),
//     email: Joi.string().min(5).max(255).required().email,
//     password:Joi.string().min(5).max(255).required()
//   }
//   return Joi.validate(user,schema)
// }

module.exports = User;
// module.exports = validateUser

