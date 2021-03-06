const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const db = "mongodb://localhost:27017/E-com";


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb is running..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, console.log("server is running..."));
app.use("/api/product", require("./product"))
app.use("/api/auth", require("./auth"))


