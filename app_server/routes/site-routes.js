var express = require("express");
var router = express.Router();
var pageController = require("../controllers/site-controller.js");

router.get("/", pageController.landingPage);
router.get("/home", pageController.userHomePage);
router.get("/:userProfilePageName", pageController.userProfilePage);
router.get("/:userProfilePageName/:section", pageController.userProfileSection);

module.exports = router;