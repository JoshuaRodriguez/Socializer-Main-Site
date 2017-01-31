(function() {
    var browserWindow = $(window);
    var body = $("body");
    var dashboardCenter = $('.dashboard-center');
    var loading = $('.loading');

    var fetching = false;
    var loggedInUser = {
        userName: "Joshua Rodriguez-Santiago",
        userPicture: "../images/random-guy.jpg"
    };
    var sampleUserPost = {
        userImage: "../images/random-guy-2.jpg",
        userName: 'Daniel Castilla',
        timeElapsed: '10m',
        userPost: 'My name is boopin bop',
        postedImage: ''
    };

    var buildNewsFeedPost = function(loggedInUser, postFromUser, pageText) {
        var newsFeedPost = '<div class="dashboard-news-feed-post-card">' +
            '<div class="dashboard-card-content-wrapper">' +
            '<div>' +
            '<a class="user-picture" style="background-image: url(' + postFromUser.userImage + ')"></a>' +
            '<p class="user-name">' + postFromUser.userName + '</p>' +
            '<p class="time-elapsed">' + postFromUser.timeElapsed + '</p>' +
            '<div style="clear: both;"></div>' +
            '<p class="user-post">' + postFromUser.userPost + '</p>';

        if (postFromUser.postedImage) {
            newsFeedPost += '<img class="image-post" src="' + postFromUser.postedImage + '"></img>';
        }

        newsFeedPost += '<hr/><div>' +
            '<a class="interaction-button like"><i class="fa fa-thumbs-o-up" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.like + '</a>' +
            '<a class="interaction-button dislike"><i class="fa fa-thumbs-o-down" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.dislike + '</a>' +
            '<a class="interaction-button comment"><i class="fa fa-comment-o" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.comment + '</a>' +
            '<a class="interaction-button share"><i class="fa fa-share" style="margin-right: 8px;" aria-hidden="true"></i>' + pageText.share + '</a>' +
            '</div>' +
            '<div class="comment-box">' +
            '<a class="user-picture" style="background-image: url(' + loggedInUser.userPicture + '); margin-right: 10px;"></a>' +
            '<input class="input-comment-field" type="text" placeholder="' + pageText.comment + '">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        return newsFeedPost;
    };

    browserWindow.scroll(function() {
        var currentScrollPosition = Math.floor(browserWindow.innerHeight() + browserWindow.scrollTop());
        var bodyHeight = Math.floor(body.height() - 100);
        if (currentScrollPosition >= bodyHeight && fetching === false) {
            fetching = true;
            $.get("/getLang")
                .fail(function(err) {
                    console.log("Failed to fetch data, status_code: " + err.status);
                })
                .done(function(data) {
                    var newsFeedPost = buildNewsFeedPost(loggedInUser, sampleUserPost, data.homePage);
                    loading.before(newsFeedPost);
                    loading.hide();
                    fetching = false;
                });
            loading.show();
        }
    });
})();