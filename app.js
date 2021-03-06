var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var handlebars = require("handlebars");
var xhb = require("express-handlebars");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var index = require("./routes/index");
var admin = require("./routes/admin");
var banner = require("./routes/banner");
var facts = require("./routes/facts");
var stats = require("./routes/stats");
var myths = require("./routes/myths");
var events = require("./routes/events");
var video = require("./routes/video");
var login = require("./routes/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", xhb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use(
  session({
    name: "session",
    key: "user_sid",
    secret: "donate",
    resave: false,
    saveUninitialized: false,
    maxAge: 360000,
    store: new FileStore({ path: path.join(__dirname, "sessions") })
  })
);

app.use("/", index);
app.use("/login", login);
app.all("/admin(/)*", (req, res, next) => {
  if (req.session.validation == null) {
    res.redirect('/login');
    // res.status(401).json({
    //   code: 401,
    //   error: "UNAUTHORIZED"
    // });
  } else {
    console.log(req.session);
    next();
  }
});
app.use("/admin", admin);
app.use("/banner", banner);
app.use("/facts", facts);
app.use("/stats", stats);
app.use("/myths", myths);
app.use("/events", events);
app.use("/video", video);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("running on port 3000...");
});
