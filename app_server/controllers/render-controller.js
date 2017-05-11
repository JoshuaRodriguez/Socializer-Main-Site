let ejs = require("ejs");
let pageText = require("../global/page-text.js");

let setLang = function (req, res) {
    if (req.query.lang) {
        if (req.query.lang === "spanish") {
            req.app.set("setLang", "spanish");
        } else {
            req.app.set("setLang", "english");
        }
        res.redirect("/home");
    }
};

let fetchNewsFeedPosts = function (req, res) {
    let templatePath = "app_server/views/partials/news-feed-post.ejs";

    let lang = req.app.get("setLang");

    let loggedInUser = {
        userId: 1,
        name: "Daniel Castilla",
        profilePicture: "/images/random-guy-2.jpg"
    };

    let sampleUserPosts = [{
        userId: 1,
        name: "Daniel Castilla",
        profilePicture: "/images/random-guy-2.jpg",
        postText: "My name is Daniel Castilla",
        timeElapsed: "35m",
        postedImage: ""
    }, {
        userId: 2,
        name: "Joshua Rodriguez",
        profilePicture: "/images/random-guy.jpg",
        postText: "Socializer is the best networking platform on earth",
        timeElapsed: "10m",
        postedImage: ""
    }, {
        userId: 3,
        name: "Phoebe Toshiko",
        profilePicture: "/images/random-girl.jpg",
        postText: "Today is such a beautiful day for a picnic!",
        timeElapsed: "45m",
        postedImage: ""
    }];

    let templateData = {
        loggedInUser: loggedInUser,
        pageText: pageText("homePage", lang)
    };

    let callback = function (err, data) {
        if (!err) {
            htmlData += data;
        } else {
            res.status(500).send({
                "message": "Internal Server Error",
                "error": err
            });
        }
    };

    let htmlData = "";

    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.userPost = sampleUserPosts[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, callback);
    }

    res.status(200).send(htmlData);
};

let fetchUserComments = function (req, res) {
    let templatePath = "app_server/views/partials/user-comment-in-feed.ejs";

    let sampleUserComments = [{
        userId: 1,
        name: "Daniel Castilla",
        profilePicture: "/images/random-guy-2.jpg",
        commentText: "Well this is interesting news..."
    }, {
        userId: 2,
        name: "Joshua Rodriguez",
        profilePicture: "/images/random-guy.jpg",
        commentText: "That is pretty thought provoking"
    }, {
        userId: 3,
        name: "Phoebe Toshiko",
        profilePicture: "/images/random-girl.jpg",
        commentText: "That certainly opened up my mind a little"
    }, {
        userId: 4,
        name: "Christian Castilla",
        profilePicture: "/images/christian.jpg",
        commentText: "Not sure how I feel about that..."
    }];

    let callback = function (err, data) {
        if (!err) {
            htmlData += data;
        } else {
            res.status(500).send({
                "message": "Internal Server Error",
                "error": err
            });
        }
    };

    let templateData = {};

    let htmlData = "";

    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.user = sampleUserComments[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, callback);
    }

    res.status(200).send(htmlData);
};

let fetchMiniProfileView = function (req, res) {
    let templatePath = "app_server/views/partials/mini-profile-view.ejs";

    let lang = req.app.get("setLang");

    let userId = req.body.userId;

    let miniProfileView = "";

    let sampleUsers = [{
        userId: 1,
        name: "Daniel Castilla",
        profilePicture: "/images/random-guy-2.jpg",
        quote: "Saving lives is my motto",
        coverPhoto: "/images/campfire.jpg"
    }, {
        userId: 2,
        name: "Joshua Rodriguez",
        profilePicture: "/images/random-guy.jpg",
        quote: "System Architect",
        coverPhoto: "/images/cover-photo.jpg"
    }, {
        userId: 3,
        name: "Phoebe Toshiko",
        profilePicture: "/images/random-girl.jpg",
        quote: "Enjoying life one day at a time",
        coverPhoto: "/images/beach-sunset.jpg"
    }, {
        userId: 4,
        name: "Christian Castilla",
        profilePicture: "/images/christian.jpg",
        quote: "Visiting Peru",
        coverPhoto: "/images/christian-cover-photo.jpg"
    }, {
        userId: 5,
        name: "Kyle Blasingame",
        profilePicture: "/images/kyle.jpg",
        quote: "I love working at Publix",
        coverPhoto: "/images/kyle-cover-photo.jpg"
    }, {
        userId: 6,
        name: "Abdullah Hamad Almoqbil",
        profilePicture: "/images/abdullah.jpg",
        quote: "الحَمْد لله",
        coverPhoto: "/images/abdullah-cover-photo.png"
    }, {
        userId: 7,
        name: "Asaif Aamir",
        profilePicture: "/images/asaif.jpg",
        quote: "Briyani Rice ^_^",
        coverPhoto: "/images/asaif-cover-photo.jpg"
    }, {
        userId: 8,
        name: "SFL Javascript Meet",
        profilePicture: "/images/javascript.jpg",
        quote: "Weekly meetings on Saturday at 9 AM!",
        coverPhoto: "/images/javascript-cover-photo.jpg"
    }, {
        userId: 9,
        name: "South Florida Android Devs",
        profilePicture: "/images/android.png",
        quote: "Gather with your local Android developers!",
        coverPhoto: "/images/android-cover-photo.jpg"
    }, {
        userId: 10,
        name: "Coders of Reddit",
        profilePicture: "/images/programming.jpg",
        quote: "Join fellow Redditors who love coding!",
        coverPhoto: "/images/programming-cover-photo.png"
    }];

    let templateData = {
        pageText: pageText("homePage", lang)
    };

    for (let index = 0; index < sampleUsers.length; index++) {
        if (sampleUsers[index].userId == userId) {
            templateData.user = sampleUsers[index];
        }
    }

    let callback = function (err, data) {
        if (!err) {
            miniProfileView = data;
        } else {
            res.status(500).send({
                "message": "Internal Server Error",
                "error": err
            });
        }
    };

    ejs.renderFile(templatePath, templateData, callback);

    res.status(200).send(miniProfileView);
};

module.exports = {
    setLang: setLang,
    fetchNewsFeedPosts: fetchNewsFeedPosts,
    fetchUserComments: fetchUserComments,
    fetchMiniProfileView: fetchMiniProfileView
};