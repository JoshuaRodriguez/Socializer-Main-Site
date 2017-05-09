// require statements (include module code into variables)
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var siteRoutes = require("./app_server/routes/site-routes");
var renderRoutes = require("./app_server/routes/render-routes");

// some path variables
var appServerDir = "./app_server/";

// create express object
var app = express();

// set up the view engine (we are using ejs)
app.set("views", path.join(appServerDir, "views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(appServerDir, "public")));
app.use(function(req, res, next) {
    var lang = req.app.get('setLang');
    if (!lang) { req.app.set('setLang', 'english'); }
    next();
});

// set up site entry points
app.use("/render", renderRoutes);
app.use("/", siteRoutes);

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
    res.render("error-page/error");
});

// export our application configuration for use by .www script inside bin folder
module.exports = app;