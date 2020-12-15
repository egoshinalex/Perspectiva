$(document).ready(function() {

    $('.content_toggle').click(function() {
        $(this).next().slideToggle(300);
        return false;
    });
});