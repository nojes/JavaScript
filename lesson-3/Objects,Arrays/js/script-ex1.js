/**
 *  Example 1 - "Simple object"
 */

function ShowVar(variable, title) {
    document.write(title + ": " + variable + "<br>");
}

// Object
var person = {
    firstname: "Vyacheslav",
    lastname: "Nozhenko",
    age: 19
}

// Methods
person.getAge = function() {
    return person.age;
}
person.getFirstname = function() {
    return person.firstname;
}

person.Display = function() {
   document.write("<br>");
    ShowVar(person.firstname, "Firstname");
    ShowVar(person.lastname, "Lastname");
    ShowVar(person.age, "Age");
}

// add new field
person.email = "vv.nojenko@gmail.com";

person.Display();
person.age++;

person.Display();
ShowVar(person.email, "Email");

// delete field
delete person.email;
person.Display();
ShowVar(person.email, "Email");
