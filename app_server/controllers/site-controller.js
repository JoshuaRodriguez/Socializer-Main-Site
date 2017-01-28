var pageData = require("../public/javascripts/global/page-data.js");

module.exports = {
    landingPage: function(req, res, next) {
        res.render("landing-page", pageData.landingPage);
    },
    userHomePage: function(req, res, next) {
        res.render("user-news-feed", sampleControllerData);
    }
};

var sampleControllerData = {
    pageText: pageData.homePage,
    loggedInUser: {
        userName: "Joshua Rodriguez-Santiago",
        userQuote: "System Architect",
    },
    userPosts: [{
        user: "Joshua Rodriguez-Santiago",
        userPicture: "../images/random-guy.jpg",
        timeElapsed: "10m",
        posting: "Etiam eget elit vel dui vehicula lacinia nec nec mauris. Donec cursus porttitor risus ut laoreet. Nam dapibus leo felis, non lacinia nisl dignissim at. " +
            "Ut maximus sollicitudin ligula, eget efficitur lacus fermentum non. Fusce dapibus imperdiet suscipit. Morbi ultricies et odio vitae pellentesque. " +
            "In porttitor egestas mauris, vitae facilisis ipsum sagittis eget. Suspendisse suscipit nunc non ligula condimentum commodo.",
        postedImage: ""
    }, {
        user: "Phoebe Toshiko",
        userPicture: "../images/random-girl.jpg",
        timeElapsed: "1h",
        posting: "I am visiting my wonderful family in Japan! This is exciting times! It has been years!",
        postedImage: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-471120.jpg"
    }, {
        user: "Daniel Castilla",
        userPicture: "../images/random-guy-2.jpg",
        timeElapsed: "1 day ago",
        posting: "I just got accepted into Medical School boy! Everyone turn up!",
        postedImage: "http://www.hopkinsmedicine.org/sebin/l/w/som_640.jpg"
    }, {
        user: "Phoebe Toshiko",
        userPicture: "../images/random-girl.jpg",
        timeElapsed: "1 day ago",
        posting: "Got a new kitty named Miko!",
        postedImage: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?dpr=1&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop="
    }],
    trendingTopics: [{
        topicTitle: 'Mexico-United States Border',
        numberOfPeopleTalking: '180k people talking about this'
    }, {
        topicTitle: 'Doomsday Clock',
        numberOfPeopleTalking: '66k people talking about this'
    }, {
        topicTitle: 'Apollo 1',
        numberOfPeopleTalking: '15k people talking about this'
    }, {
        topicTitle: '2018 BMW M3',
        numberOfPeopleTalking: '48k people talking about this'
    }, {
        topicTitle: 'Google Doodle',
        numberOfPeopleTalking: '13k people talking about this'
    }],
    socializerGroups: [{
        groupName: 'SFL Javascript Meet',
        groupImage: 'http://www.acadecap.org/wp-content/uploads/2016/08/495484_385c_3.jpg'
    }, {
        groupName: 'South Florida Android Devs',
        groupImage: 'https://pbs.twimg.com/profile_images/606585229034135553/2NqZJYQI.png'
    }, {
        groupName: 'Coders of Reddit',
        groupImage: 'http://www.ichanical.com/wp-content/uploads/2015/04/html-programming.jpg'
    }]
};