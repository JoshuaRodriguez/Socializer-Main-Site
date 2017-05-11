let pageText = require("../global/page-text.js");

let landingPageDummyData = function(lang) {
    return {
        pageText: pageText("landingPage", lang)
    };
};

let homePageDummyData = function (lang, currentPath) {
    return {
        currentPath: currentPath,
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
            profilePicture: "../images/christian.jpg"
        }, {
            userId: 5,
            name: "Kyle Blasingame",
            profilePicture: "../images/kyle.jpg"
        }, {
            userId: 6,
            name: "Abdullah Hamad Almoqbil",
            profilePicture: "../images/abdullah.jpg"
        }, {
            userId: 7,
            name: "Asaif Aamir",
            profilePicture: "../images/asaif.jpg"
        }]
    };
};

let userProfilePageDummyData = function (lang, currentPath) {
    return {
        currentPath: currentPath,
        pageText: pageText("userProfilePage", lang),
        loggedInUser: {
            userId: 1,
            userName: "daniel.castilla.710",
            name: "Daniel Castilla",
            quote: "Saving lives is my motto",
            profilePicture: "../images/random-guy-2.jpg",
            coverPhoto: "../images/campfire.jpg"
        },

    };
};

let renderRequestedPage = function (req, res, path, data) {
    let lang = req.app.get("setLang");
    let currentPath = res.locals.currentPath;
    res.render(path, data(lang, currentPath));
};

let landingPage = function (req, res) {
    renderRequestedPage(req, res, "landing-page/landing-page", landingPageDummyData);
};

let userHomePage = function (req, res) {
    renderRequestedPage(req, res, "user-news-feed-page/user-news-feed", homePageDummyData);
};

let userProfilePage = function (req, res) {
    renderRequestedPage(req, res, "user-profile-pages/timeline", userProfilePageDummyData);
};

let userProfileSection = function (req, res, next) {
    if (res.locals.profileSections.includes(req.params.section)) {
        renderRequestedPage(req, res, "user-profile-pages/" + req.params.section, userProfilePageDummyData);
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