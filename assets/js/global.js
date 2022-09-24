$(document).ready(function() {
    // slide des lignes et reseaux sociaux
    $(".fixed").hide();
    setTimeout(() => {
        $(".fixed").slideDown(5000);
    }, 2000);

    // zomm des h1, h et t'challa
    $("h1").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $("h1").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });
    $("h2").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $("h2").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });
    $(".t'challa").mouseover(function() {
        $(this).css("transform", "scale(1.2)");
    });
    $(".t'challa").mouseleave(function() {
        $(this).css("transform", "scale(1)");
    });
});