const User = require("../models/user.model");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async (req, res) => {
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
