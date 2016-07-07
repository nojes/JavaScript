
$(document).ready(function() {
    $('#dots').click(function() {
        $('#full_content').slideToggle();
        $('#dots').hide();
    });
    $('#hide').click(function () {
        $('#dots').show();
        $('#full_content').slideToggle();
    });
});