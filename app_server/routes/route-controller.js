var express = require("express");
var router = express.Router();
var pageController = require("../controllers/page-controller.js");
var pageData = require("../public/javascripts/global/page-data.js");

/* WEBSITE ROUTES */
router.get("/", pageController.landingPage);
router.get("/home", pageController.userHomePage);

/* ROUTES USED FOR FETCHING DATA NEEDED FOR CLIENT SIDE RENDERING */
router.get("/getCurrentLangText", function(req, res, next) {
    var lang = req.app.get('setLang');
    res.send(pageData(null, lang));
});

router.get("/setLang", function(req, res, next) {
    if (req.query.lang) {
        if (req.query.lang === "spanish") {
            req.app.set('setLang', 'spanish');
        } else {
            req.app.set('setLang', 'english');
        }
        res.redirect('/home');
    }
});

module.exports = router;