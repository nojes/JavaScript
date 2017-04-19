/**
 *  "Simple Text Editor" example.
 */
$(document).ready(function() {

    var textarea = $('.text-editor #text');
    var edited_text = $('.text-editor #edited_text.bordered');

    function Decorate(text_class) {
        textarea.html(textarea.val()).toggleClass(text_class);
        edited_text.html(textarea.val()).toggleClass(text_class);
    }
    function Clear() {
        textarea.val('');
        edited_text.html('');
    }

    $('.text-editor .control.bold').click(function() {Decorate('bold')});
    $('.text-editor .control.italic').click(function() {Decorate('italic')});
    $('.text-editor .control.underline').click(function() {Decorate('underline')});
    $('#clear').click(Clear);

});