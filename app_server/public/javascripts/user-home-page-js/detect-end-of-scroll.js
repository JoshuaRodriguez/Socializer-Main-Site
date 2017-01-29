(function() {
    var browserWindow = $(window);
    var body = $("body");
    var dashboardCenter = $('.dashboard-center');
    var loading = $('.loading');
    var fetching = false;

    var loggedInUser = {
        userName: "Joshua Rodriguez-Santiago",
        userQuote: "System Architect",
        userPicture: "../images/random-guy.jpg"
    };

    var pageText = {
        "dislike": "Dislike",
        "like": "Like",
        "comment": "Comment",
        "share": "Share"
    };

    var myTestUsers = [{
        userImage: "../images/random-guy-2.jpg",
        userName: 'Daniel Castilla',
        timeElapsed: '10m',
        userPost: 'My name is boopin bop'
    }, {
        userImage: "../images/random-guy.jpg",
        userName: 'Joshua Rodriguez-Santiago',
        timeElapsed: '10m',
        userPost: 'This is loading freaky fast!'
    }, {
        userImage: "../images/random-girl.jpg",
        userName: 'Phoebe Toshiko',
        timeElapsed: '10m',
        userPost: 'Omg its really rainy and windy outside! =('
    }];

    var chooseRandomTestUser = function(max, min) {
        return myTestUsers[Math.floor(Math.random() * (max - min + 1)) + min];
    }

    var addUserPost = function(loggedInUser, userData) {

        var div = '<div class="dashboard-news-feed-post-card">' +
            '<div class="dashboard-card-content-wrapper">' +
            '<div>' +
            '<a class="user-picture" style="background-image: url(' + userData.userImage + ');"></a>' +
            '<p class="user-name">' + userData.userName + '</p>' +
            '<p class="time-elapsed">' + userData.timeElapsed + '</p>' +
            '<div style="clear: both"></div>' +
            '<p class="user-post">' + userData.userPost + '</p>';

        if (userData.postedImage) {
            div += '<img class="image-post" src=' + userData.postedImage + '></img>';
        }

        div += '<hr>' +
            '<div>' +
            '<a class="interaction-button like"><i class="fa fa-thumbs-o-up" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.like + '</a>' +
            '<a class="interaction-button dislike"><i class="fa fa-thumbs-o-down" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.dislike + '</a>' +
            '<a class="interaction-button comment"><i class="fa fa-comment-o" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.comment + '</a>' +
            '<a class="interaction-button share"><i class="fa fa-share" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.share + '</a>' +
            '</div>' +
            '<div class="comment-box">' +
            '<a class="user-picture" style="background-image: url(' + loggedInUser.userPicture + '); margin-right: 10px;"></a>' +
            '<input class="input-comment-field" type="text" placeholder="Comment">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        return div;
    };

    browserWindow.scroll(function() {
        var currentScrollPosition = Math.floor(browserWindow.innerHeight() + browserWindow.scrollTop());
        var bodyHeight = Math.floor(body.height() - 100);
        if (currentScrollPosition >= bodyHeight && fetching == false) {
            fetching = true;
            setTimeout(function() {
                loading.before(addUserPost(loggedInUser, chooseRandomTestUser(2, 0)));
                loading.hide();
                fetching = false;
            }, 500);
            loading.show();
        }
    });
})();