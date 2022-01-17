const express = require("express");
const users = require("./routes/user.routes");
// const User = require("./models/user.model");
require("joi");
require("dotenv/config");

const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());

// Connection to db
dbConnect();

// Routes
app.use("/register", (req, res) => {
  res.sendFile(__dirname, "views/Index.html");
});

app.get("/", (req, res) => {
  res.send("Hello kalasa");
});

app.use("/api/users", users);

// Listening to a server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}.`);
});
