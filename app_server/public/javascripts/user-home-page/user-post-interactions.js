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