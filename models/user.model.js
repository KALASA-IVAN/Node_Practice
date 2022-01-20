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


exports.User = User;
