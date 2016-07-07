$(document).ready(function() {
    var text = $('#text');
    $('#fadeIn').click(function() {
        text.fadeIn(1000);
    });

    $('#fadeOut').click(function() {
        text.fadeOut(1000);
    });

    $('#fadeTo').click(function() {
        text.fadeTo(1000, 0.5);
    });

    $('#hide').click(function() {
        text.hide();
    });

    $('#show').click(function() {
        text.show();
    });

    $('#slideDown').click(function() {
        text.slideDown();
    });

    $('#slideToggle').click(function() {
        text.slideToggle();
    });

    $('#slideUp').click(function() {
        text.slideUp();
    });
});