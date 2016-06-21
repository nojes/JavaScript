/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */


var form = document.getElementById('contact_form');
form.addEventListener('submit', validateForm);

function validateForm() {
    var name = document.contact_form.name;
    var age = document.contact_form.age;
    var terms = document.contact_form.terms;
    var genderMale = document.contact_form.gender[0];
    var genderFemale = document.contact_form.gender[1];

    var form_groups = document.contact_form.getElementsByClassName('form-group');
    var error_class = 'form-group warning';

    var valid = true;
    if(name.value == "") {
        //alert("Пожалуйста, введите ваше имя.");
        valid = false;
        form_groups[0].className = error_class;
    }
    if(genderMale.checked == false && genderFemale.checked == false) {
        //alert("Пожалуйста, выбирете ваш пол.");
        valid = false;
        form_groups[1].className = error_class;
    }
    if(age.selectedIndex == 0) {
        //alert("Пожалуйста, выбирите ваш возраст.");
        valid = false;
        form_groups[3].className = error_class;
    }
    if(terms.checked == false) {
        //alert("Пожалуйста, согласитесь с соглашением.");
        valid = false;
        form_groups[4].className = error_class;
    }
    return valid;
}