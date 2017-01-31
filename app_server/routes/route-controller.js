var express = require("express");
var router = express.Router();
var siteController = require("../controllers/site-controller.js");
var pageData = require("../public/javascripts/global/page-data.js");

/* WEBSITE ROUTES */
router.get("/", siteController.landingPage);
router.get("/home", siteController.userHomePage);

/* SERVER-SIDE ROUTES USED FOR FETCHING DATA NEEDED FOR CLIENT SIDE RENDERING */
router.get("/getLang", function(req, res, next) {
    res.send(pageData);
});

module.exports = router;