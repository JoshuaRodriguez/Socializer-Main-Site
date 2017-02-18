var express = require("express");
var router = express.Router();
var renderController = require("../controllers/render-controller.js");

router.get("/setLang", renderController.setLang);
router.get("/fetchNewsFeedPosts", renderController.fetchNewsFeedPosts);
router.get("/fetchUserComments", renderController.fetchUserComments);
router.post("/fetchMiniProfileView", renderController.fetchMiniProfileView);

module.exports = router;