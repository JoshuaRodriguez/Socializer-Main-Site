// require statements (include module code into variables)
let express = require("express");
let path = require("path");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let errorHandlers = require('./custom-middlewares/errorHandlers');
let helpers = require("./custom-middlewares/helpers");
let siteRoutes = require("./app_server/routes/site-routes");
let renderRoutes = require("./app_server/routes/render-routes");

// some path variables
let appServerDir = "./app_server/";

// create express object
let app = express();

// set up the view engine (using ejs)
app.set("views", path.join(appServerDir, "views"));
app.set("view engine", "ejs");

// use middleware functions
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(appServerDir, "public")));
app.use(helpers.setLanguage);
app.use(helpers.setResponseLocals);

// set up site entry points
app.use("/render", renderRoutes);
app.use("/", siteRoutes);

// catch 404 and forward to error handler
app.use(errorHandlers.catch404);

// error handler
app.use(errorHandlers.errorHandler);

// export our application configuration for use by .www script inside bin folder
module.exports = app;