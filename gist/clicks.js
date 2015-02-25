/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("my code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({transition: 1 s});
});
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
.rotated {
    transform: rotate(180deg);
}