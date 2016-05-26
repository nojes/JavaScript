/**
 *  Example 2 - Event Listener
 */

//
document.getElementById("btn-start").addEventListener("click", ShowClock);


var clock = document.getElementById("clock");
var button = document.getElementById("btn-start");

function ShowClock() {
    setInterval(function displayTime() {
        var now = new Date();
        clock.innerHTML = now.toLocaleTimeString();
        clock.style.visibility = "visible";
        //console.log(clock);
    }, 1000);
}

button.onclick = function () {
    console.log(event.type + " на " + event.currentTarget);
    console.log(event.clientX + ":" + event.clientY);
}

var bodyNode = document.body;
bodyNode.onload = function () {
    var now = new Date();
    console.log("[" + now + "]: " + "Страничка загружена");
}
