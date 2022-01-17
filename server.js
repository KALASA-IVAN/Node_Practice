const express = require("express");
require("dotenv/config");

const dbConnect = require("./config/dbConnect");

const app = express();

// Connection to db
dbConnect();

// Routes
app.get("/", (req, res) => {
  res.send("Hello kalasa")
})

// Listening to a server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}.`);
});
