/** ARROW SCROLL FUNCTIONALITY **/
(function() {
    var browserWindow = $(window);
    var arrowBox = $('.arrow-box');
    var backToTop = $('.back-to-top');

    var scrollSmoothly = function(objectWithEventListener) {
        $('html, body').animate({
            scrollTop: "0px"
        }, 500);
    };

    var showArrowBoxIfPassedThreshold = function(value) {
        if (browserWindow.scrollTop() > value) {
            arrowBox.show();
        } else {
            arrowBox.hide();
        }
    };

    browserWindow.on('scroll', function() {
        showArrowBoxIfPassedThreshold(619);
    });

    backToTop.on('click', function(event) {
        scrollSmoothly(this);
    });
})();

/** DETECT END OF SCROLL FUNCTIONALITY **/
(function() {
    var browserWindow = $(window);
    var body = $("body");
    var dashboardCenter = $('.dashboard-center');
    var loading = $('.loading');
    var fetching = false;

    var loggedInUser = {
        userName: "Daniel Castilla",
        userPicture: "../images/random-guy-2.jpg"
    };

    var sampleUserPosts = [{
        userName: 'Daniel Castilla',
        userImage: "../images/random-guy-2.jpg",
        userQuote: 'Saving lives is my motto',
        userPost: 'My name is Daniel Castilla',
        timeElapsed: '35m',
        postedImage: '',
        backgroundImage: "../images/campfire.jpg"
    }, {
        userName: 'Joshua Rodriguez',
        userImage: "../images/random-guy.jpg",
        userQuote: 'System Architeect',
        userPost: 'Socializer is the best networking platform on earth',
        timeElapsed: '10m',
        postedImage: '',
        backgroundImage: "../images/cover-photo.jpg"
    }, {
        userImage: "../images/random-girl.jpg",
        userName: 'Phoebe Toshiko',
        timeElapsed: '45m',
        userPost: 'Today is such a beautiful day for a picnic!',
        postedImage: '',
        userQuote: 'Enjoying life one day at a time',
        backgroundImage: "../images/beach-sunset.jpg"
    }];

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
            '<div class="mini-profile-view">' +
            '<div class="mini-profile-view-caret caret"></div>' +
            '<div class="profile-card-image-wrapper" style="background-image: url(' + postFromUser.backgroundImage + ');"></div>' +
            '<div class="profile-card-content-wrapper">' +
            '<div class="profile-picture" style="background-image: url(' + postFromUser.userImage + ');"></div>' +
            '<h6 class="users-full-name">' + postFromUser.userName + '</h6>' +
            '<p class="users-quote">' + postFromUser.userQuote + '<P>' +
            '<div style="width: 177px; margin: 0 auto;">' +
            '<a class="add-friend-button"><i class="fa fa-plus" aria-hidden="true"></i>' + pageText.addFriend + '</a>' +
            '<a class="add-friend-button"><i class="fa fa-envelope" aria-hidden="true"></i>' + pageText.messages.substring(0, 7) + '</a>' +
            '</div>' +
            '</div>' +
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
            $.get("/getCurrentLangText")
                .fail(function(err) {
                    console.log("Failed to fetch data, status_code: " + err.status);
                })
                .done(function(data) {
                    var index = Math.floor(Math.random() * 3) + 0;
                    var newsFeedPost = buildNewsFeedPost(loggedInUser, sampleUserPosts[index], data.homePage);
                    loading.before(newsFeedPost);
                    loading.hide();
                    fetching = false;
                });
            loading.show();
        }
    });
})();

/** HIDE ELEMENTS ON SCREEN BY CLICK X FUNCTIONALITY **/
(function() {
    $(".fa.fa-times.on-people-you-may-know").on("click", function() {
        $(this).parent().parent().parent().eq(0).fadeOut(200);
    });

    $(".fa.fa-times.on-trending-topics").on("click", function() {
        $(this).parent().eq(0).fadeOut(200);
    });

    $('.possible-friend').hover(function() {
        $(this).children().eq(1).children('i').show();
    }, function() {
        $(this).children().eq(1).children('i').hide();
    });

    $('.trending').hover(function() {
        $(this).children('.fa.fa-times.on-trending-topics').show();
    }, function() {
        $(this).children('.fa.fa-times.on-trending-topics').hide();
    });
})();

/** SETTINGS DROP DOWN FUNCTIONALITY **/
(function() {
    var settingsDropdown = $(".settings-dropdown");
    var dropDownContent = $(".dropdown-content");
    var browserWindow = $(window);

    settingsDropdown.toggled = 0;

    settingsDropdown.click(function() {
        if (!settingsDropdown.toggled) {
            dropDownContent.addClass("show");
            settingsDropdown.toggled = 1;
        } else {
            dropDownContent.removeClass("show");
            settingsDropdown.toggled = 0;
        }
    });

    browserWindow.click(function(event) {
        if (!event.target.matches("a.settings-dropdown")) {
            dropDownContent.removeClass("show");
            settingsDropdown.toggled = 0;
        }
    });
})();

/** USER POST INTERACTIONS FUNCTIONALITY **/
(function() {
    $("body").on("click", "a.interaction-button", function(event) {
        if (event.target.matches("a.interaction-button.comment")) {
            $(this).parent('div').siblings('.comment-box').show();
        } else if (event.target.matches("a.interaction-button.like")) {
            console.log("LIKED POST");
        } else if (event.target.matches("a.interaction-button.dislike")) {
            console.log("DISLIKED POST");
        } else if (event.target.matches("a.interaction-button.share")) {
            console.log("SHARED POST");
        }
    });
})();

/** MOUSE OVER PROFILE PICTURE ON POST FUNCTIONALITY **/
(function() {
    $(document).on("mouseover", "a.user-picture", function() {
        var miniProfileView = $(this).parent().children(".mini-profile-view");
        var newsFeedPostImageTop = $(this).position().top;
        var timeoutId = setTimeout(function() {
            miniProfileView.css({ top: newsFeedPostImageTop + 59 });
            miniProfileView.show();
        }, 500);

        $(document).on("mouseout", "a.user-picture, .mini-profile-view", function() {
            clearTimeout(timeoutId);
            $(this).parent().children(".mini-profile-view").fadeOut(200);

        });

        $(document).on("mouseover", ".mini-profile-view", function(event) {
            $(this).stop(true, true).show();
        });
    });

})();