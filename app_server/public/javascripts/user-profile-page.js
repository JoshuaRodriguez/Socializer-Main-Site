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

/** MOUSE OVER PROFILE PICTURE ON POST FUNCTIONALITY **/
(function () {
    $(document).on("mouseover", ".friends-profile-picture", function () {
        var $pictureEl = $(this);
        var $userId = $pictureEl.siblings(".data-attr").data().userId;
        var $pictureElTop = $pictureEl.position().top;
        var extraSpacing = 106;

        var removeProfileViewFromDOM = function (element, time) {
            setTimeout(function () {
                if (element.css("display") != "block") {
                    element.remove();
                }
            }, time);
        };

        var timeoutId = setTimeout(function () {
            $.post("../../render/fetchMiniProfileView", {
                userId: $userId
            })
            .done(function (data) {
                var $renderedProfileView = $($.parseHTML(data));
                $pictureEl.parent().after($renderedProfileView);
                $renderedProfileView.css({
                    top: $pictureElTop + extraSpacing
                });
                $renderedProfileView.show();
            });
        }, 500);

        $(document).on("mouseout", ".friends-profile-picture, .mini-profile-view", function () {
            clearTimeout(timeoutId);
            var $currentElement = $(this);
            if ($currentElement.is(".friends-profile-picture")) {
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