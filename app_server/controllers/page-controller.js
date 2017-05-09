var pageText = require("../global/page-text.js");

var homePageDummyData = function(lang) {
    return {
        pageText: pageText("homePage", lang),
        loggedInUser: {
            userId: 1,
            userName: "daniel.castilla.710",
            name: "Daniel Castilla",
            quote: "Saving lives is my motto",
            profilePicture: "../images/random-guy-2.jpg",
            coverPhoto: "../images/campfire.jpg"
        },
        userPosts: [{
            userId: 2,
            name: "Joshua Rodriguez-Santiago",
            profilePicture: "../images/random-guy.jpg",
            timeElapsed: "10m",
            postText: "Etiam eget elit vel dui vehicula lacinia nec nec mauris. Donec cursus porttitor risus ut laoreet. Nam dapibus leo felis, non lacinia nisl dignissim at. " +
            "Ut maximus sollicitudin ligula, eget efficitur lacus fermentum non. Fusce dapibus imperdiet suscipit.",
            postedImage: ""
        }, {
            userId: 3,
            name: "Phoebe Toshiko",
            profilePicture: "../images/random-girl.jpg",
            timeElapsed: "1h",
            postText: "I am visiting my wonderful family in Japan! This is exciting times! It has been years!",
            postedImage: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-471120.jpg",
        }, {
            userId: 1,
            name: "Daniel Castilla",
            profilePicture: "../images/random-guy-2.jpg",
            timeElapsed: "1 day ago",
            postText: "Playing the new Resident Evil 7: Biohazard! Sick game!",
            postedImage: "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2016/10/09/resident-evil-7-hands.jpg",
        }],
        trendingTopics: [{
            topicTitle: "Mexico-United States Border",
            numberOfPeopleTalking: "180k people talking about this"
        }, {
            topicTitle: "Doomsday Clock",
            numberOfPeopleTalking: "66k people talking about this"
        }, {
            topicTitle: "Apollo 1",
            numberOfPeopleTalking: "15k people talking about this"
        }, {
            topicTitle: "2018 BMW M3",
            numberOfPeopleTalking: "48k people talking about this"
        }, {
            topicTitle: "Google Doodle",
            numberOfPeopleTalking: "13k people talking about this"
        }],
        socializerGroups: [{
            userId: 8,
            name: "SFL Javascript Meet",
            profilePicture: "http://www.acadecap.org/wp-content/uploads/2016/08/495484_385c_3.jpg"
        }, {
            userId: 9,
            name: "South Florida Android Devs",
            profilePicture: "https://pbs.twimg.com/profile_images/606585229034135553/2NqZJYQI.png"
        }, {
            userId: 10,
            name: "Coders of Reddit",
            profilePicture: "http://www.ichanical.com/wp-content/uploads/2015/04/html-programming.jpg"
        }],
        possibleFriends: [{
            userId: 4,
            name: "Christian Castilla",
            profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032914_1341682239188761_1208149176963666741_n.jpg?oh=fe8d9971188ec420de4dc9753487a867&oe=591C0E56"
        }, {
            userId: 5,
            name: "Kyle Blasingame",
            profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032289_1133493216748605_769622635020935443_n.jpg?oh=f4d4a46c62368787d243e6969dc2343c&oe=5912CDF3"
        }, {
            userId: 6,
            name: "Abdullah Hamad Almoqbil",
            profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/67745_1329335653324_4607492_n.jpg?oh=6cb9d324cbac2906626e0c7cdbb5fe53&oe=5901D790"
        }, {
            userId: 7,
            name: "Asaif Aamir",
            profilePicture: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/12122630_10207379515663022_4169579083574170794_n.jpg?oh=85d02339695c6c26d33cf10aa9c63b53&oe=594A533B"
        }]
    };
};

var userProfilePageDummyData = function(lang) {
    return {
        pageText: pageText("userProfilePage", lang),
        loggedInUser: {
            userId: 1,
            userName: "daniel.castilla.710",
            name: "Daniel Castilla",
            quote: "Saving lives is my motto",
            profilePicture: "../images/random-guy-2.jpg",
            coverPhoto: "../images/campfire.jpg"
        }
    };
};

var landingPage = function(req, res) {
    var lang = req.app.get("setLang");
    res.render("landing-page/landing-page", pageText("landingPage", lang));
};

var userHomePage = function(req, res) {
    var lang = req.app.get("setLang");
    res.render("user-news-feed-page/user-news-feed", homePageDummyData(lang));
};

var userProfilePage = function(req, res) {
    var lang = req.app.get("setLang");
    res.render("user-profile-pages/timeline", userProfilePageDummyData(lang));
};

var userProfileSection = function(req, res, next) {
    var lang = req.app.get("setLang");
    var section = req.params.section;
    var sectionNames = ["timeline", "about", "friends", "photos", "videos", "groups"];

    if (sectionNames.includes(section)) {
        res.render("user-profile-pages/" + section, userProfilePageDummyData(lang));
    } else {
        next();
    }

};

module.exports = {
    landingPage: landingPage,
    userHomePage: userHomePage,
    userProfilePage: userProfilePage,
    userProfileSection: userProfileSection
};