
$("#icon").click(function(){
    $("#mobileNav").show();
    $("#icon").hide();
    $("#x").show();
});

$("#x").click(function(){
    $("#mobileNav").hide();
    $("#icon").show();
    $("#x").hide();
});

/* $(function() {
    $('nav, #x')
        .hide();
}); */

$(function() {
    $('#mobileNav, #x')
        .hide();
});