var ejs = require("ejs");
var pageData = require("../public/javascripts/global/page-data.js");

var setLang = function(req, res, next) {
    if (req.query.lang) {
        if (req.query.lang === "spanish") {
            req.app.set('setLang', 'spanish');
        } else {
            req.app.set('setLang', 'english');
        }
        res.redirect('/home');
    }
};

var fetchNewsFeedPosts = function(req, res, next) {
    var lang = req.app.get('setLang');

    var loggedInUser = {
        userName: "Daniel Castilla",
        userPicture: "/images/random-guy-2.jpg"
    };

    var sampleUserPosts = [{
        user: 'Daniel Castilla',
        userPicture: "/images/random-guy-2.jpg",
        userQuote: 'Saving lives is my motto',
        posting: 'My name is Daniel Castilla',
        timeElapsed: '35m',
        postedImage: '',
        backgroundImage: "/images/campfire.jpg"
    }, {
        user: 'Joshua Rodriguez',
        userPicture: "/images/random-guy.jpg",
        userQuote: 'System Architeect',
        posting: 'Socializer is the best networking platform on earth',
        timeElapsed: '10m',
        postedImage: '',
        backgroundImage: "/images/cover-photo.jpg"
    }, {
        userPicture: "/images/random-girl.jpg",
        user: 'Phoebe Toshiko',
        timeElapsed: '45m',
        posting: 'Today is such a beautiful day for a picnic!',
        postedImage: '',
        userQuote: 'Enjoying life one day at a time',
        backgroundImage: "/images/beach-sunset.jpg"
    }];

    var templateData = {
        loggedInUser: loggedInUser,
        pageText: pageData(null, lang).homePage
    };

    var templatePath = "app_server/views/user-news-feed-page/partials/news-feed-post.ejs";

    var htmlData = "";

    for (var i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.userPost = sampleUserPosts[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, function (err, data) {
            if (!err) {
                htmlData += data;
            } else {
                res.status(500).send({ "message": "Internal Server Error", "error": err });
            }
        });
    }

    res.status(200).send(htmlData);
};

var fetchUserComments = function(req, res, next) {
    var templatePath = "app_server/views/user-news-feed-page/partials/user-comment-in-feed.ejs";

    var sampleUserComments = [{
        userName: 'Daniel Castilla',
        userImage: "../images/random-guy-2.jpg",
        userPost: 'How nice'
    }, {
        userName: 'Joshua Rodriguez',
        userImage: "../images/random-guy.jpg",
        userPost: 'Whoa that is cool'
    }, {
        userImage: "../images/random-girl.jpg",
        userName: 'Phoebe Toshiko',
        userPost: 'Acceptable'
    }];

    var templateData = { };

    var htmlData = "";

    for (var i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.userComment = sampleUserComments[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, function(err, data) {
            if (!err) {
                htmlData += data;
            } else {
                res.status(500).send({ "message": "Internal Server Error", "error": err });
            }
        });
    }

    res.status(200).send(htmlData);
};

module.exports = {
    setLang: setLang,
    fetchNewsFeedPosts: fetchNewsFeedPosts,
    fetchUserComments: fetchUserComments
};