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
            }, 500);
            if (width < 600) {
                $("#Blog").addClass("Phone");
            } else {
                $("#Blog").removeClass("Phone");
            }
        }
    });
    if (width < 600) {
        $("#Blog").addClass("Phone");
    } else {
        $("#Blog").removeClass("Phone");
    }
    $(window).scroll(function () {
        if ($("html").scrollTop() > 450) {
            $(".name_menu").addClass("fixed_tit");
        } else {
            $(".name_menu").removeClass("fixed_tit");
        }
    });
})();