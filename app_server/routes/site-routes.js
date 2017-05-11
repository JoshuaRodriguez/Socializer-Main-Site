let express = require("express");
let router = express.Router();
let pageController = require("../controllers/page-controller.js");

router.get("/", pageController.landingPage);
router.get("/home", pageController.userHomePage);
router.get("/:userProfilePageName", pageController.userProfilePage);
router.get("/:userProfilePageName/:section", pageController.userProfileSection);

module.exports = router;