function Calculator(selector) {
    var c = this;

    c.form = $(selector);
    c.controls = c.form.find('.btn');

    c.field = c.form.find('#values');
    c.submit = c.form.find('#submit');

    c.Push = function() {
        c.field.val(c.field.val() + event.target.value);
    };

    c.Calc = function() {
        var field = c.field.val();

        var result = 0;
        //var re_numbers = /[\+\-\*\/]/;
        //var re_actions = /[0-9]/;
        //var numbers = field.split(re_numbers);
        //var actions = field.split(re_actions);
        //
        //console.log(numbers);
        //console.log(actions);

        c.field.val(c.field.val() + " = " + result);
    };

    c.controls.click(c.Push);
    c.submit.click(c.Calc);
}