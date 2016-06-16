/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */

function validateComment(input) {
    if(input.value.length < 20)
    {
        input.setCustomValidity("Min: 20 symbols")
    }
    else {
        input.setCustomValidity("");
    }
}

var button = document.getElementById('btn-send').addEventListener('click', function() {
    var form = new Form([
        'name',
        'telephone',
        'email',
        'birthDate',
        'comments'
    ]);
    form.Log();
});