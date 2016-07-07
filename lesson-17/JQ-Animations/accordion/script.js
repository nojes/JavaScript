/**
 * Simple accordion
 */
$(document).ready(function(){
    $('.content').addClass("hide");
    $('.item').on('click', function() {
        $(this)
            .next()
            .slideDown(200)
            .siblings(".content")
            .slideUp(200);
    })
});