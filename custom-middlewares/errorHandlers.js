// catch 404 and forward to error handler
let catch404 = function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
};

// error handler
let errorHandler = function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error-page/error");
};

module.exports = {
    catch404: catch404,
    errorHandler: errorHandler,
};