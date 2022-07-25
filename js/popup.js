$(document).ready(function () {

    setTimeout(function () {
        $('.popUp').fadeIn(1000).css("display", "flex");
    }, 2000);

    $("#popup_btn").click(function () {
        $(".popUp").css("display", "none");
    });

});