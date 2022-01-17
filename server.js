const express = require("express");
const users = require("./routes/user.routes");
const User = require("./models/user.model");
require("dotenv/config");

const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json())

// Connection to db
dbConnect();

// Routes
app.get("/", (req, res) => {
  res.send("Hello kalasa");
});
app.use("/api/users", users);
// app.post("/api/users", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   });

//   await user.save();
//   res.send(user);
// });

// Listening to a server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}.`);
});
