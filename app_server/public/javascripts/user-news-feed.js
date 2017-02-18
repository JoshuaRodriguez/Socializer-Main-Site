/** ARROW SCROLL FUNCTIONALITY **/
(function() {
    var browserWindow = $(window);
    var arrowBox = $('.arrow-box');
    var backToTop = $('.back-to-top');

    var scrollSmoothly = function() {
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

    backToTop.on('click', function() {
        scrollSmoothly();
    });
})();

/** DETECT END OF SCROLL FUNCTIONALITY **/
(function() {
    var browserWindow = $(window);
    var body = $("body");
    var loading = $('.loading-news-feed');
    var fetching = false;

    browserWindow.scroll(function() {
        var currentScrollPosition = Math.floor(browserWindow.innerHeight() + browserWindow.scrollTop());
        var bodyHeight = Math.floor(body.height() - 100);
        if (currentScrollPosition >= bodyHeight && fetching === false) {
            fetching = true;
            $.get("render/fetchNewsFeedPosts")
            .fail(function(err) {
                console.log("Failed to fetch data, status_code: " + err.status);
            })
            .done(function(data) {
                setTimeout(function(){
                    loading.before(data);
                    loading.hide();
                    fetching = false;
                }, 1000);
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

    $(".fa.fa-times.socializer-group").on("click", function() {
        $(this).parent().parent().fadeOut(200);
    });

    $('.possible-friend').hover(function() {
        $(this).children().eq(1).children('i').show();
    }, function() {
        $(this).children().eq(1).children('i').hide();
    });

    $(".socializer-group").hover(function() {
        $(this).children().eq(1).children().eq(1).show();
    }, function() {
        $(this).children().eq(1).children().eq(1).hide();
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
    var loadCommentSection = function(commentFeed, loadingGif) {
        $.get("render/fetchUserComments")
        .fail(function(err) {
            console.log("Failed to fetch data, status_code: " + err.status);
        })
        .done(function(data) {
            commentFeed.append(data);
            commentFeed.show();
            loadingGif.hide();
        });
        loadingGif.show();
    };

    $("body").on("click", "a.interaction-button", function(event) {
        var parentDiv = $(this).parent('div');
        var commentBox = parentDiv.siblings('.comment-box');
        var commentFeed = parentDiv.siblings('.comment-feed');
        var loadingGif = parentDiv.siblings('.loading-user-comments');

        if (event.target.matches("a.interaction-button.comment")) {
            commentBox.show();
            loadCommentSection(commentFeed, loadingGif);
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
    $(document).on("mouseover", "a.user-picture, a.possible-friend-picture", function() {
        var pictureEl = $(this);
        var userId = $(this).siblings(".data-attr").data().userId
        var newsFeedPostImageTop = $(this).position().top;

        var removeProfileViewFromDOM = function(element, time) {
            setTimeout(function() {
                if (element.css("display") != "block") {
                    element.remove();
                }
            }, time);
        };

        var timeoutId = setTimeout(function() {
            $.post("render/fetchMiniProfileView", { userId: userId })
            .fail(function(err) {
                console.log("Failed to fetch data, status_code: " + err.status);
            })
            .done(function(data) {
                var renderedProfileView = $($.parseHTML(data));
                pictureEl.after(renderedProfileView);
                renderedProfileView.css({ top: newsFeedPostImageTop + 59 });
                renderedProfileView.show();
            });
        }, 500);

        $(document).on("mouseout", "a.user-picture, a.possible-friend-picture, .mini-profile-view", function() {
            clearTimeout(timeoutId);
            var currentElement = $(this);
            if (currentElement.is("a.user-picture") || currentElement.is("a.possible-friend-picture")) {
                var miniProfileViewEl = currentElement.siblings('.mini-profile-view');
                miniProfileViewEl.fadeOut(200);
                removeProfileViewFromDOM(miniProfileViewEl, 300);
            } else if (currentElement.is(".mini-profile-view")) {
                currentElement.fadeOut(200);
                removeProfileViewFromDOM(currentElement, 300);
            }
        });

        $(document).on("mouseover", ".mini-profile-view", function() {
            $(this).stop(true, true).show();
        });
    });
})();