// var createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body");
const docs = require("./docs");
var express = require("express");
var path = require("path");
const logger = require("morgan");
const swaggerUI = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(cors());
app.use(express.json());

app.use(logger("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(docs));

//------------ import router
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_SERVER, { useNewUrlParser: true })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

// module.exports = app;
