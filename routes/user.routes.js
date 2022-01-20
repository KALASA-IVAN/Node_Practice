const User = require("../models/user.model");
const { validate } = require("../helpers/authSchema");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }

  const {err} = await validate.validateAsync(req.body);
  console.log(result);
  if (err) {
    return res.status(400).send(err.details[0].message)
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(401).send("The user already exists");
  } else {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    res.send(user);
  }
});

module.exports = router;
