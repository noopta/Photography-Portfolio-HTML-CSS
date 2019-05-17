
$(document).ready(function(){
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 1500);
});


$("#projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1500);
});


$("#reach").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

});