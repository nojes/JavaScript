/**
 * @author Vyacheslav Nozhenko <vv.nojenko@gmail.com>
 */


var form = document.getElementById('contact_form');
var default_class = 'form-group';
var error_class = 'form-group warning';

form.addEventListener('submit', valid_Form);

form.first_name.addEventListener('input', valid_FirstName);
form.last_name.addEventListener('input', valid_LastName);
form.email.addEventListener('input', valid_Email);
form.password.addEventListener('input', valid_Password);
form.cpassword.addEventListener('input', valid_CPassword);
form.country.addEventListener('input', valid_Country);
form.city.addEventListener('input', valid_City);
form.gender[0].addEventListener('change', valid_Gender);
form.gender[1].addEventListener('change', valid_Gender);
form.lang.addEventListener('input', valid_Lang);
form.about.addEventListener('input', valid_About);

function valid_Form() {
    var valid = true;

    valid = valid_FirstName();
    valid = valid_LastName();
    valid = valid_Email();
    valid = valid_Password();
    valid = valid_CPassword();
    valid = valid_Country();
    valid = valid_City();
    valid = valid_Gender();
    valid = valid_Lang();
    valid = valid_About();

    if(!valid) {
        event.preventDefault();
    }
    return valid;
}


function valid_FirstName() {
    if(form.first_name.value == ""){
        form.first_name.parentNode.className = error_class;
        return false;
    } else {
        form.first_name.parentNode.className = default_class;
    }
    return true;
}

function valid_LastName() {
    if (form.last_name.value == "") {
        form.last_name.parentNode.className = error_class;
        return false;
    } else {
        form.last_name.parentNode.className = default_class;
    }
    return true;
}

function valid_Email() {
    if (form.email.value == "") {
        form.email.parentNode.className = error_class;
        return false;
    } else {
        form.email.parentNode.className = default_class;
    }
    return true;
}

function valid_Password() {
    if (form.password.value == "") {
        form.password.parentNode.className = error_class;
        return false;
    } else {
        form.password.parentNode.className = default_class;
    }
    return true;
}

function valid_CPassword() {
    if (form.cpassword.value == "") {
        form.cpassword.parentNode.className = error_class;
        return false;
    } else {
        form.cpassword.parentNode.className = default_class;
    }
    return true;
}

function valid_Country() {
    if (form.country.value == "") {
        form.country.parentNode.className = error_class;
        return false;
    } else {
        form.country.parentNode.className = default_class;
    }
    return true;
}

function valid_City() {
    if (form.city.value == "") {
        form.city.parentNode.className = error_class;
        return false;
    } else {
        form.city.parentNode.className = default_class;
    }
    return true;
}

function valid_Gender() {
    if (!form.gender[0].checked && !form.gender[1].checked) {
        form.gender[0].parentNode.className = error_class;
        return false;
    } else {
        form.gender[0].parentNode.className = default_class;
    }
    return true;
}

function valid_Lang() {
    if (form.lang.selectedIndex == 0) {
        form.lang.parentNode.className = error_class;
        return false;
    } else {
        form.lang.parentNode.className = default_class;
    }
    return true;
}

function valid_About() {
    if (form.about.value == "") {
        form.about.parentNode.className = error_class;
        return false;
    } else {
        form.about.parentNode.className = default_class;
    }
    return true;
}