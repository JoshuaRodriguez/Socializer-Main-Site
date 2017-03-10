/** ARROW SCROLL FUNCTIONALITY **/
(function() {
    var $browserWindow = $(window);
    var $arrowBox = $(".arrow-box");
    var $backToTop = $(".back-to-top");

    var scrollSmoothly = function() {
        $("html, body").animate({
            scrollTop: "0px"
        }, 500);
    };

    var showArrowBoxIfPassedThreshold = function(value) {
        if ($browserWindow.scrollTop() > value) {
            $arrowBox.show();
        } else {
            $arrowBox.hide();
        }
    };

    $browserWindow.on("scroll", function() {
        showArrowBoxIfPassedThreshold(619);
    });

    $backToTop.on("click", function() {
        scrollSmoothly();
    });
})();

/** SETTINGS DROP DOWN FUNCTIONALITY **/
(function() {
    var $settingsDropdown = $(".settings-dropdown");
    var $dropDownContent = $(".dropdown-content");
    var $browserWindow = $(window);

    $settingsDropdown.toggled = 0;

    $settingsDropdown.click(function() {
        if (!$settingsDropdown.toggled) {
            $dropDownContent.addClass("show");
            $settingsDropdown.toggled = 1;
        } else {
            $dropDownContent.removeClass("show");
            $settingsDropdown.toggled = 0;
        }
    });

    $browserWindow.click(function(event) {
        if (!event.target.matches("a.settings-dropdown")) {
            $dropDownContent.removeClass("show");
            $settingsDropdown.toggled = 0;
        }
    });
})();