function Calculator(selector) {
    var c = this;

    c.form = $(selector);
    c.a = c.form.find('#a');
    c.b = c.form.find('#b');
    c.act = c.form.find('#act');

    c.result = c.form.find('#result');
    c.submit = c.form.find('#submit');

    c.res = 0;
    var a = 0;
    var b = 0;
    var act = '';

    c.Calc = function()
    {
        a = Number(c.a.val());
        b = Number(c.b.val());
        act = c.act.val();
        switch (act) {
            case '+':
                c.res = a + b;
                break;
            case '-':
                c.res = a - b;
                break;
            case '*':
                c.res = a * b;
                break;
            case '/':
                c.res = a / b;
                break;
        }
    };

    c.ShowRes = function()
    {
        c.Calc();
        c.result.val(c.res);
        c.Log();
    };

    c.Log = function()
    {
        console.log('form: ' + c.form);
        console.log('a: ' + a);
        console.log('b: ' + b);
        console.log('act: ' + c.act);
        console.log('result: ' + c.result);
        console.log('submit: ' + c.submit);
        console.log('res: ' + c.res);
    };

    c.submit.click(c.ShowRes);
}