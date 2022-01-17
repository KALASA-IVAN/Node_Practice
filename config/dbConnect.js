const mongoose = require("mongoose");

const dbConnect = () => {
  return mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("db connected successfully on host");
    })
    .catch((err) => {
      console.log("Db not connected", err.message);
    });
};

module.exports = dbConnect;
