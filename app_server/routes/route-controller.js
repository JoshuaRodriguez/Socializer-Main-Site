var express = require("express");
var router = express.Router();
var siteController = require("../controllers/site-controller.js");

router.get("/", siteController.landingPage);
router.get("/home", siteController.userHomePage);

module.exports = router;