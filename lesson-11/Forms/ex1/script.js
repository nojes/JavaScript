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

/** @type {Form} */
var form = new Form('form', 'btn-send');
form.submit.addEventListener('click', function() {
    //form.Log();
    //form.LogEx();
    form.LogValues();

    var checkbox_crab = form.getInputByName('crab');
    console.log("checkbox_crab => " + checkbox_crab.checked);
    //event.preventDefault();
});