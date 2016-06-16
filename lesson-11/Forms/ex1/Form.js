/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */


function Form(elems) {
    this.ids = elems;
    this.elements = [''];
    for(var i = 0; i < this.ids.length; i++) {
        this.elements[i] = document.getElementById(this.ids[i]);
    }
}

Form.prototype.Log = function() {
    for(var i = 0; i < this.elements.length; i++) {
        console.log(this.ids[i] + ": " + this.elements[i].value);
    }
};