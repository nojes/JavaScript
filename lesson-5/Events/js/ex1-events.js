/**
 *  Events Funtions
 */

function focusMouse() {
    var style = document.getElementById("txt");
    console.log(style);
    if (style.style.color != "red") {
        style.style.color = "red";
    }
    else {
        style.style.color = "black";
    }
}

function leftClick() {
    var style = document.getElementById("txt");
    console.log(style);
}

function getClass() {
    var class1 = document.getElementsByClassName("class1");
    console.log(class1);
}
