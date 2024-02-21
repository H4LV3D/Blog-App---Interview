const mongoose = require("mongoose");
require("dotenv").config();
const config = require("../config");

mongoose.set("strictQuery", true);
const mongoString = config.SERVER_URI;

mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err: any) => {
    console.log("Error connecting to mongodb", err);
  });

module.exports = mongoose;
