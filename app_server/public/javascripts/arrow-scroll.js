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