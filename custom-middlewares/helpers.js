// middleware to set user defined language
let setLanguage = function (req, res, next) {
    let lang = req.app.get("setLang");
    if (!lang) {
        req.app.set("setLang", "english");
    }
    next();
};

// middleware to set currentPath on res.locals
let setResponseLocals = function (req, res, next) {
    res.locals.currentPath = req.path;
    res.locals.profileSections = ["timeline", "about", "friends", "photos", "videos", "groups"];
    next();
};

module.exports = {
    setLanguage: setLanguage,
    setResponseLocals: setResponseLocals
};