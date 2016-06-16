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
