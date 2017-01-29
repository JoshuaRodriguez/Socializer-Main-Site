(function() {

    $(".fa.fa-times.on-people-you-may-know").on("click", function() {
        $(this).parent().parent().parent().eq(0).fadeOut("slow");
    });

    $(".fa.fa-times.on-trending-topics").on("click", function() {
        $(this).parent().eq(0).fadeOut("slow");
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