var pageData = require("../public/javascripts/global/page-data.js");

module.exports = {
    landingPage: function(req, res, next) {
        var lang = req.app.get('setLang');
        res.render("landing-page", pageData("landingPage", lang));
    },
    userHomePage: function(req, res, next) {
        var lang = req.app.get('setLang');
        res.render("user-news-feed", {
            pageText: pageData("homePage", lang),
            loggedInUser: {
                userName: "Daniel Castilla",
                userQuote: "Saving lives is my motto",
                userPicture: "../images/random-guy-2.jpg",
                backgroundImage: "../images/campfire.jpg"
            },
            userPosts: [{
                user: "Joshua Rodriguez-Santiago",
                userPicture: "../images/random-guy.jpg",
                timeElapsed: "10m",
                posting: "Etiam eget elit vel dui vehicula lacinia nec nec mauris. Donec cursus porttitor risus ut laoreet. Nam dapibus leo felis, non lacinia nisl dignissim at. " +
                    "Ut maximus sollicitudin ligula, eget efficitur lacus fermentum non. Fusce dapibus imperdiet suscipit. Morbi ultricies et odio vitae pellentesque. " +
                    "In porttitor egestas mauris, vitae facilisis ipsum sagittis eget. Suspendisse suscipit nunc non ligula condimentum commodo.",
                postedImage: "",
                backgroundImage: "../images/cover-photo.jpg",
                userQuote: "System Architect"
            }, {
                user: "Phoebe Toshiko",
                userPicture: "../images/random-girl.jpg",
                timeElapsed: "1h",
                posting: "I am visiting my wonderful family in Japan! This is exciting times! It has been years!",
                postedImage: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-471120.jpg",
                userQuote: "Enjoying life one day at a time",
                backgroundImage: "../images/beach-sunset.jpg"
            }, {
                user: "Daniel Castilla",
                userPicture: "../images/random-guy-2.jpg",
                timeElapsed: "1 day ago",
                posting: "Playing the new Resident Evil 7: Biohazard! Sick game!",
                postedImage: "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2016/10/09/resident-evil-7-hands.jpg",
                userQuote: "Saving lives is my motto",
                backgroundImage: "../images/campfire.jpg"
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
            }],
            possibleFriends: [{
                userName: 'Christian Castilla',
                profilePicture: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032914_1341682239188761_1208149176963666741_n.jpg?oh=fe8d9971188ec420de4dc9753487a867&oe=591C0E56'
            }, {
                userName: 'Kyle Blasingame',
                profilePicture: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/15032289_1133493216748605_769622635020935443_n.jpg?oh=f4d4a46c62368787d243e6969dc2343c&oe=5912CDF3'
            }, {
                userName: 'Abdullah Hamad Almoqbil',
                profilePicture: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/67745_1329335653324_4607492_n.jpg?oh=6cb9d324cbac2906626e0c7cdbb5fe53&oe=5901D790'
            }, {
                userName: 'Asaif Aamir',
                profilePicture: 'https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/12122630_10207379515663022_4169579083574170794_n.jpg?oh=85d02339695c6c26d33cf10aa9c63b53&oe=594A533B'
            }]
        });
    }
};