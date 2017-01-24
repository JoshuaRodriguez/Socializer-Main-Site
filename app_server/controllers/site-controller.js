var pageData = require("../public/javascripts/global/page-data.js");

module.exports = {
    landingPage: function(req, res, next) {
        res.render("landing-page", pageData.landingPage);
    },
    userHomePage: function(req, res, next) {
        res.render("user-home-page", {
            pageText: pageData.homePage,
            userPosts: [{
                userName: "Joshua Rodriguez-Santiago",
                userPicture: "../images/random-guy.jpg",
                timeElapsed: "10m",
                posting: "This is my first post on Socializer! I love this new networking platform! It's much " +
                    "nicer than facebook and more modern!",
                postedImage: ''
            }, {
                userName: "Phoebe Toshiko",
                userPicture: "../images/random-girl.jpg",
                timeElapsed: "1hr",
                posting: "I am visiting my wonderful family in Japan! This is exciting times! It has been years!",
                postedImage: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-471120.jpg'
            }]
        });
    }
};