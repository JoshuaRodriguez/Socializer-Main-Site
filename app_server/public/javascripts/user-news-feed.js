/** ARROW SCROLL FUNCTIONALITY **/
(function () {
    var $browserWindow = $(window);
    var $arrowBox = $(".arrow-box");
    var $backToTop = $(".back-to-top");

    var scrollSmoothly = function () {
        $("html, body").animate({
            scrollTop: "0px"
        }, 500);
    };

    var showArrowBoxIfPassedThreshold = function (value) {
        if ($browserWindow.scrollTop() > value) {
            $arrowBox.show();
        } else {
            $arrowBox.hide();
        }
    };

    $browserWindow.on("scroll", function () {
        showArrowBoxIfPassedThreshold(619);
    });

    $backToTop.on("click", function () {
        scrollSmoothly();
    });
})();

/** DETECT END OF SCROLL FUNCTIONALITY **/
(function () {
    var $browserWindow = $(window);
    var $body = $("body");
    var $loading = $(".loading-news-feed");
    var fetching = false;
    var newsFeedPostRenderingURL = "render/fetchNewsFeedPosts";

    $browserWindow.scroll(function () {
        var currentScrollPosition = Math.floor($browserWindow.innerHeight() + $browserWindow.scrollTop());
        var bodyHeight = Math.floor($body.height() - 100);
        if (currentScrollPosition >= bodyHeight && fetching === false) {
            fetching = true;
            $.get(newsFeedPostRenderingURL)
                .done(function (data) {
                    setTimeout(function () {
                        $loading.before(data);
                        $loading.hide();
                        fetching = false;
                    }, 500);
                });
            $loading.show();
        }
    });
})();

/** HIDE ELEMENTS ON SCREEN BY CLICK X FUNCTIONALITY **/
(function () {
    $(".fa.fa-times.on-people-you-may-know").on("click", function () {
        $(this).parent().parent().parent().eq(0).fadeOut(200);
    });

    $(".fa.fa-times.on-trending-topics").on("click", function () {
        $(this).parent().eq(0).fadeOut(200);
    });

    $(".fa.fa-times.socializer-group").on("click", function () {
        $(this).parent().parent().fadeOut(200);
    });

    $(".possible-friend").hover(function () {
        $(this).children(".possible-friend-text-wrapper").children("i").show();
    }, function () {
        $(this).children(".possible-friend-text-wrapper").children("i").hide();
    });

    $(".socializer-group").hover(function () {
        $(this).eq(0).children().eq(2).children().eq(1).show();
    }, function () {
        $(this).eq(0).children().eq(2).children().eq(1).hide();
    });

    $(".trending").hover(function () {
        $(this).children(".fa.fa-times.on-trending-topics").show();
    }, function () {
        $(this).children(".fa.fa-times.on-trending-topics").hide();
    });
})();

/** SETTINGS DROP DOWN FUNCTIONALITY **/
(function () {
    var $settingsDropdown = $(".settings-dropdown");
    var $dropDownContent = $(".dropdown-content");
    var $browserWindow = $(window);

    $settingsDropdown.toggled = 0;

    $settingsDropdown.click(function () {
        if (!$settingsDropdown.toggled) {
            $dropDownContent.addClass("show");
            $settingsDropdown.toggled = 1;
        } else {
            $dropDownContent.removeClass("show");
            $settingsDropdown.toggled = 0;
        }
    });

    $browserWindow.click(function (event) {
        if (!event.target.matches("a.settings-dropdown")) {
            $dropDownContent.removeClass("show");
            $settingsDropdown.toggled = 0;
        }
    });
})();

/** USER POST INTERACTIONS FUNCTIONALITY **/
(function () {
    var loadCommentSection = function (commentFeed, viewMoreComments, loadingGif) {
        $.get("render/fetchUserComments")
            .done(function (data) {
                setTimeout(function() {
                    viewMoreComments.before(data);
                    commentFeed.show();
                    loadingGif.hide();
                }, 1000);
            });
        loadingGif.show();
    };

    $("body").on("click", "a.view-more-comments", function () {
        var $viewMoreComments = $(this);
        var $commentFeed = $(this).parent();
        var $loadingGif = $viewMoreComments.children("img");
        loadCommentSection($commentFeed, $viewMoreComments, $loadingGif, false);
    });

    $("div.dashboard-center").on("click", "a.interaction-button.comment, a.interaction-button.comment > .fa", function() {
        var $parentDiv = $(this).parent("div");
        var $commentBox = $parentDiv.siblings(".comment-box");
        var $commentFeed = $parentDiv.siblings(".comment-feed");
        var $viewMoreComments = $commentFeed.children("a.view-more-comments");
        var $loadingGif = $parentDiv.siblings(".loading-user-comments");
        $commentBox.show();
        loadCommentSection($commentFeed, $viewMoreComments, $loadingGif);
        $(this).addClass("no-more-loading");
    });

    // $("body").on("click", "a.interaction-button", function (event) {
    //     var $parentDiv = $(this).parent("div");
    //     var $commentBox = $parentDiv.siblings(".comment-box");
    //     var $commentFeed = $parentDiv.siblings(".comment-feed");
    //     var $viewMoreComments = $commentFeed.children("a.view-more-comments");
    //     var $loadingGif = $parentDiv.siblings(".loading-user-comments");
    //     var eTarget = event.target;

    //     if (eTarget.matches("a.interaction-button.comment") || eTarget.matches("a.interaction-button.comment > .fa")) {
    //         $commentBox.show();
    //         loadCommentSection($commentFeed, $viewMoreComments, $loadingGif, true);
    //     } else if (eTarget.matches("a.interaction-button.like") || eTarget.matches("a.interaction-button.like > .fa")) {
    //         // LIKED POST
    //     } else if (eTarget.matches("a.interaction-button.dislike") || eTarget.matches("a.interaction-button.dislike > .fa")) {
    //         // DISLIKED POST
    //     } else if (eTarget.matches("a.interaction-button.share") || eTarget.matches("a.interaction-button.share > .fa")) {
    //         // SHARED POST
    //     }
    // });
})();

/** MOUSE OVER PROFILE PICTURE ON POST FUNCTIONALITY **/
(function () {
    $(document).on("mouseover", "a.user-picture, a.possible-friend-picture", function () {
        var $pictureEl = $(this);
        var $userId = $pictureEl.siblings(".data-attr").data().userId;
        var $newsFeedPostImageTop = $pictureEl.position().top;
        var extraSpacing = 59;

        var removeProfileViewFromDOM = function (element, time) {
            setTimeout(function () {
                if (element.css("display") != "block") {
                    element.remove();
                }
            }, time);
        };

        var timeoutId = setTimeout(function () {
            $.post("render/fetchMiniProfileView", {
                userId: $userId
            })
            .done(function (data) {
                var $renderedProfileView = $($.parseHTML(data));
                $pictureEl.parent().after($renderedProfileView);
                $renderedProfileView.css({
                    top: $newsFeedPostImageTop + extraSpacing
                });
                $renderedProfileView.show();
            });
        }, 500);

        $(document).on("mouseout", "a.user-picture, a.possible-friend-picture, .mini-profile-view", function () {
            clearTimeout(timeoutId);
            var $currentElement = $(this);
            if ($currentElement.is("a.user-picture") || $currentElement.is("a.possible-friend-picture")) {
                var $miniProfileViewEl = $currentElement.parent().siblings(".mini-profile-view");
                $miniProfileViewEl.fadeOut(200);
                removeProfileViewFromDOM($miniProfileViewEl, 300);
            } else if ($currentElement.is(".mini-profile-view")) {
                $currentElement.fadeOut(200);
                removeProfileViewFromDOM($currentElement, 300);
            }
        });

        $(document).on("mouseover", ".mini-profile-view", function () {
            $(this).stop(true, true).show();
        });
    });
})();