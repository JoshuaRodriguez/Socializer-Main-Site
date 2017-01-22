var pageData = require("../public/javascripts/global/page-data.js");

module.exports = {
    landingPage: function(req, res, next) {
        res.render("landing-page", pageData.landingPage);
    },
    userHomePage: function(req, res, next) {
        res.render("user-home-page", {});
    }
};