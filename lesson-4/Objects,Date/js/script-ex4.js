/**
 *  Example 4 - "Objects constructor"
 */

function theMan(name, age, job) {
    // Properties
    this.name = name || "Vasya";
    this.age = age || 0;
    this.job = job || "NULL";

    // Methods
    this.Show = function Show() {
        var out = "Name: " + this.name + "<br>"
                + "Age: " + this.age + "<br>"
                + "Job: " + this.job + "<br>";
        document.write("<br>" + out);
    }
}

var me = new theMan("Vyacheslav", 19, "coder");
var man = new theMan("Petro", 22, "student");
me.Show();
man.Show();


function theWoman(name, age, job, flower, dog) {
    // Inheritance from theMan
    this.woman = theMan;
    this.woman(name, age, job);

    // New properties
    this.flower = flower || "none";
    this.dog = dog || "none";

    // New methods
    this.About = function() {
        var out = "I love " + this.flower + " and dogs " + this.dog + " breed.";
        document.write("About: " + out);
    }
}

var woman = new theWoman("Svetlana", 20, "Manicurist", "roses", "Shepherd");
woman.Show();
woman.About();
