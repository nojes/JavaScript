/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */

/**
 * Create Form instance.
 *
 * @constructor
 * @this {Form}
 *
 * @param {number, string} id - Form id.
 * @param {number, string} submit_id - Form submit(button) id.
 * @property {Element} form - Form element.
 * @property {Element} submit - Form submit(button) element.
 * @property {NodeList} inputs - Input elements.
 * @property {NodeList} textareas - Textarea elements.
 * @property {NodeList} selects - Select elements.
 */
function Form(id, submit_id) {
    this.form = document.getElementById(id);
    this.submit = document.getElementById(submit_id);
    this.inputs = this.form.getElementsByTagName('input');
    this.textareas = this.form.getElementsByTagName('textarea');
    this.selects = this.form.getElementsByTagName('select');
}

/**
 *  Console log.
 *  @this {Form}
 */
Form.prototype.Log = function() {
    console.log("\n");
    var i;
    for (i=0; i<this.inputs.length; i++) console.log(this.inputs[i]);
    for (i=0; i<this.textareas.length; i++) console.log(this.textareas[i]);
    for (i=0; i<this.selects.length; i++) console.log(this.selects[i]);
};

/**
 *  Extended console log.
 *  @this {Form}
 */
Form.prototype.LogEx = function() {
    console.log("\n");
    console.log(this.form);
    console.log(this.inputs);
    console.log(this.textareas);
    console.log(this.selects);
};

/**
 *  Console log: Form values.
 *  @this {Form}
 */
Form.prototype.LogValues = function() {
    console.log("\n");
    var i;
    for (i=0; i<this.inputs.length; i++) console.log(this.inputs[i].name + " => " + this.inputs[i].value);
    for (i=0; i<this.textareas.length; i++) console.log(this.textareas[i].name + " => " + this.textareas[i].value);
    for (i=0; i<this.selects.length; i++) console.log(this.selects[i].name + " => " + this.selects[i].value);
};

/**
 * Returned Input by name.
 *
 * @this {Form}
 * @param {string} name - Input name.
 * @returns {*}
 */
Form.prototype.getInputByName = function(name) {
    for (var i=0; i<this.inputs.length; i++) {
        if(this.inputs[i].name == name) {
            return this.inputs[i];
        }
    }
};

/**
 * Returned TextArea by name.
 *
 * @this {Form}
 * @param {string} name - Textarea name.
 * @returns {*}
 */
Form.prototype.getTextareaByName = function(name) {
    for (var i=0; i<this.textareas.length; i++) {
        if(this.textareas[i].name == name) {
            return this.textareas[i];
        }
    }
};

/**
 * Returned Select by name.
 *
 * @this {Form}
 * @param {string} name - Select name.
 * @returns {*}
 */
Form.prototype.getSelectByName = function(name) {
    for (var i=0; i<this.selects.length; i++) {
        if(this.selects[i].name == name) {
            return this.selects[i];
        }
    }
};