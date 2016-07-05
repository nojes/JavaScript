/**
 * Example 1.
 * get elements by tag
 * @type {*|jQuery|HTMLElement}
 */
var li_first = $("li:first");
var li_2 = $("li:eq(2)");
var li_last = $("li:last");
li_first.html(10);
console.log(li_first.html());
console.log(li_2.html());
console.log(li_last.html());

/**
 * Example 2.
 * get inputs by type
 * @type {*|jQuery|HTMLElement}
 */
var texts = $(":text");
var passwords = $(":password");
var button = $(":button");
console.log(texts.val());
console.log(texts.eq(1).val());
console.log(passwords);
console.log(button);

/**
 * Example 3.
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var li_elems = $("#list li");
var submit = $("#submit");

function ChangeLiColor() {
    for (var i = 0; i < li_elems.length; i++) {
        li_elems.eq(i).css('color', getRandomColor());
    }
}
submit.click(ChangeLiColor);
setInterval(ChangeLiColor, 1000);


/**
 * Example 4.
 * @type {*|jQuery|HTMLElement}
 */
$('#form #textarea').keydown(function() {
    if($(this).val().length > 20) {
        $(this).addClass('warning');
    }
    if($(this).val().length <= 20) {
        $(this).removeClass('warning');
    }
    console.log($(this).val().length);
});
