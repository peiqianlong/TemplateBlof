"use strict";

(function () {
    var trme = null;
    var width = $(window).width();

    $(window).resize(function () {
        trme = true;
        if (trme = true) {
            setTimeout(function () {
                width = $(window).width();
                trme = null;
            }, 50);
        }
    });

    $(window).scroll(function () {
        if ($("html").scrollTop() > 450) {
            $(".name_menu").addClass("fixed_tit");
        } else {
            $(".name_menu").removeClass("fixed_tit");
        }
    });
})();

$(".guidang .list").click(function () {
    $(this).find("dd").toggle("fast");
    if ($(this).find("dt").attr("class") == 'up') {
        $(this).find("dt").removeClass("up");
        $(this).find("dt").addClass("down");
    } else {
        $(this).find("dt").removeClass("down");
        $(this).find("dt").addClass("up");
    }
});

$(".phonemuen").click(function () {
    $(".menu ul").toggle("fast");
});