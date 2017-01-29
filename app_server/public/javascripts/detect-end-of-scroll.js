(function() {
    var browserWindow = $(window);
    var documentInWindow = $(document);
    var dashboardCenter = $('.dashboard-center');
    var loading = $('.loading');

    var myTestUser = {
        userImage: "../images/random-guy.jpg",
        userName: 'Joshua Rodriguez-Santiago',
        timeElapsed: '10m',
        userPost: 'This is loading freaky fast!'
    };

    var createUserPost = function(userData) {
        var div = '<div class="dashboard-news-feed-post-card">' +
            '<div class="dashboard-card-content-wrapper">' +
            '<div>' +
            '<a class="user-picture" style="background-image: url(' + myTestUser.userImage + ');"></a>' +
            '<p class="user-name">' + myTestUser.userName + '</p>' +
            '<p class="time-elapsed">' + myTestUser.timeElapsed + '</p>' +
            '<div style="clear: both"></div>' +
            '<p class="user-post">' + myTestUser.userPost + '</p>';

        if (userData.postedImage) {
            div += '<img class="image-post" src=' + myTestUser.postedImage + '></img>';
        }

        div += '<hr>' +
            '<div>' +
            '<a class="interaction-button"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</a>' +
            '<a class="interaction-button"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i> Dislike</a>' +
            '<a class="interaction-button"><i class="fa fa-comment-o" aria-hidden="true"></i> Comment</a>' +
            '<a class="interaction-button"><i class="fa fa-share" aria-hidden="true"></i> Share</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        return div;
    };

    browserWindow.scroll(function() {
        if (browserWindow.scrollTop() + browserWindow.height() == documentInWindow.height()) {
            setTimeout(function() {
                loading.before(createUserPost(myTestUser));
                loading.hide();
            }, 200);
            loading.show();
        }
    });
})();