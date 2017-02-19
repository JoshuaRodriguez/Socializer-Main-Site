var ejs = require("ejs");
var pageData = require("../public/javascripts/global/page-data.js");

var setLang = function(req, res) {
    if (req.query.lang) {
        if (req.query.lang === "spanish") {
            req.app.set('setLang', 'spanish');
        } else {
            req.app.set('setLang', 'english');
        }
        res.redirect('/home');
    }
};

var fetchNewsFeedPosts = function(req, res) {
    var templatePath = "app_server/views/partials/news-feed-post.ejs";

    var lang = req.app.get('setLang');

    var loggedInUser = {
        userId: 1,
        name: "Daniel Castilla",
        profilePicture: "/images/random-guy-2.jpg"
    };

    var sampleUserPosts = [{
        userId: 1,
        name: 'Daniel Castilla',
        profilePicture: "/images/random-guy-2.jpg",
        postText: 'My name is Daniel Castilla',
        timeElapsed: '35m',
        postedImage: ''
    }, {
        userId: 2,
        name: 'Joshua Rodriguez',
        profilePicture: "/images/random-guy.jpg",
        postText: 'Socializer is the best networking platform on earth',
        timeElapsed: '10m',
        postedImage: ''
    }, {
        userId: 3,
        name: 'Phoebe Toshiko',
        profilePicture: "/images/random-girl.jpg",
        postText: 'Today is such a beautiful day for a picnic!',
        timeElapsed: '45m',
        postedImage: ''
    }];

    var templateData = {
        loggedInUser: loggedInUser,
        pageText: pageData("homePage", lang)
    };

    var callback = function(err, data) {
        if (!err) {
            htmlData += data;
        } else {
            res.status(500).send({ "message": "Internal Server Error", "error": err });
        }
    };

    var htmlData = "";

    for (var i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.userPost = sampleUserPosts[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, callback);
    }

    res.status(200).send(htmlData);
};

var fetchUserComments = function(req, res) {
    var templatePath = "app_server/views/partials/user-comment-in-feed.ejs";

    var sampleUserComments = [{
        userId: 1,
        name: 'Daniel Castilla',
        profilePicture: "/images/random-guy-2.jpg",
        commentText: 'Well this is interesting news...'
    }, {
        userId: 2,
        name: 'Joshua Rodriguez',
        profilePicture: "/images/random-guy.jpg",
        commentText: 'That is pretty thought provoking'
    }, {
        userId: 3,
        name: 'Phoebe Toshiko',
        profilePicture: "/images/random-girl.jpg",
        commentText: 'That certainly opened up my mind a little'
    }, {
        userId: 4,
        name: 'Christian Castilla',
        profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032914_1341682239188761_1208149176963666741_n.jpg?oh=fe8d9971188ec420de4dc9753487a867&oe=591C0E56",
        commentText: 'Not sure how I feel about that...'
    }];

    var callback = function(err, data) {
        if (!err) {
            htmlData += data;
        } else {
            res.status(500).send({ "message": "Internal Server Error", "error": err });
        }
    };

    var templateData = {};

    var htmlData = "";

    for (var i = 0; i < Math.floor(Math.random() * 20); i++) {
        templateData.user = sampleUserComments[Math.floor(Math.random() * 3)];
        ejs.renderFile(templatePath, templateData, callback);
    }

    res.status(200).send(htmlData);
};

var fetchMiniProfileView = function(req, res, next) {
    var templatePath = "app_server/views/partials/mini-profile-view.ejs";

    var lang = req.app.get('setLang');

    var userId = req.body.userId;

    var miniProfileView = "";

    var sampleUsers = [{
        userId: 1,
        name: 'Daniel Castilla',
        profilePicture: "/images/random-guy-2.jpg",
        quote: 'Saving lives is my motto',
        coverPhoto: "/images/campfire.jpg"
    }, {
        userId: 2,
        name: 'Joshua Rodriguez',
        profilePicture: "/images/random-guy.jpg",
        quote: 'System Architect',
        coverPhoto: "/images/cover-photo.jpg"
    }, {
        userId: 3,
        name: 'Phoebe Toshiko',
        profilePicture: "/images/random-girl.jpg",
        quote: "Enjoying life one day at a time",
        coverPhoto: "/images/beach-sunset.jpg"
    }, {
        userId: 4,
        name: 'Christian Castilla',
        profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032914_1341682239188761_1208149176963666741_n.jpg?oh=fe8d9971188ec420de4dc9753487a867&oe=591C0E56",
        quote: "Visiting Peru",
        coverPhoto: "http://www.reallywildchallenges.com/images/easyblog_images/299/2e1ax_simplistic_entry_dreamstime_9947942.jpg"
    }, {
        userId: 5,
        name: 'Kyle Blasingame',
        profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032289_1133493216748605_769622635020935443_n.jpg?oh=f4d4a46c62368787d243e6969dc2343c&oe=5912CDF3",
        quote: "I love working at Publix",
        coverPhoto: "http://pointsnearme.com/wp-content/uploads/2017/01/publix-near-me-cover-520x245.jpg"
    }, {
        userId: 6,
        name: 'Abdullah Hamad Almoqbil',
        profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/67745_1329335653324_4607492_n.jpg?oh=6cb9d324cbac2906626e0c7cdbb5fe53&oe=5901D790",
        quote: "الحَمْد لله",
        coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
    }, {
        userId: 7,
        name: 'Asaif Aamir',
        profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/12122630_10207379515663022_4169579083574170794_n.jpg?oh=85d02339695c6c26d33cf10aa9c63b53&oe=594A533B",
        quote: "Briyani Rice ^_^",
        coverPhoto: "http://www.wefindyougo.com/wp-content/uploads/2013/10/Pakistani-Food.jpg"
    }, {
        userId: 8,
        name: 'SFL Javascript Meet',
        profilePicture: "http://www.acadecap.org/wp-content/uploads/2016/08/495484_385c_3.jpg",
        quote: "Weekly meetings on Saturday at 9 AM!",
        coverPhoto: "https://udemy-images.udemy.com/course/750x422/672274_cd11_2.jpg"
    }, {
        userId: 9,
        name: 'South Florida Android Devs',
        profilePicture: "https://pbs.twimg.com/profile_images/606585229034135553/2NqZJYQI.png",
        quote: "Gather with your local Android developers!",
        coverPhoto: "https://speckycdn-sdm.netdna-ssl.com/wp-content/uploads/2016/04/material-design-calendar-google.jpg"
    }, {
        userId: 10,
        name: 'Coders of Reddit',
        profilePicture: "http://www.ichanical.com/wp-content/uploads/2015/04/html-programming.jpg",
        quote: "Join fellow Redditors who love coding!",
        coverPhoto: "http://marketingland.com/wp-content/ml-loads/2014/07/reddit-combo-1920-800x450.png"
    }];

    var templateData = {
        pageText: pageData("homePage", lang)
    };

    for (var index = 0; index < sampleUsers.length; index++) {
        if (sampleUsers[index].userId == userId) {
            templateData.user = sampleUsers[index];
        }
    }

    var callback = function(err, data) {
        if (!err) {
            miniProfileView = data;
        } else {
            console.log(err);
            res.status(500).send({ "message": "Internal Server Error", "error": err });
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