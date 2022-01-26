const express = require("express");
const users = require("./routes/user.routes");
// const User = require("./models/user.model");
require("joi");
const dotenv = require("dotenv");

dotenv.config();
const bodyParser = require("body-parser");

const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("./views"))
// Connection to db
dbConnect();

// Routes
app.get("/register", (req, res) => {
  res.sendFile("./views/index.html", {root: __dirname});
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
