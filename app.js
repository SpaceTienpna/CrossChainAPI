// var createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
var express = require("express");
const logger = require("morgan");
require('dotenv').config();


var app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.json());


var usersRouter = require("./routes/users");
var chainRouter = require("./routes/chain");
var pairRouter = require('./routes/pair');
var tokenRouter = require('./routes/token');
//------------ import router
// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/chains",chainRouter);
app.use("/pair", pairRouter);
app.use("/token", tokenRouter);



const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_SERVER, { useNewUrlParser: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

// module.exports = app;
