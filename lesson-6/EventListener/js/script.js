/**
 *  @author nojes <vv.nojenko@gmail.com>
 */

// Add Event Listeners
document.getElementById("one").addEventListener("click", onClick);
document.getElementById("two").addEventListener("contextmenu", onRightClick);
document.getElementById("three").addEventListener("mouseover", onMouseOver);
document.getElementById("four").addEventListener("mousewheel", onScroll);
document.getElementById("five").addEventListener("mouseover", onMouseWhell);

document.getElementById("button").addEventListener("click", ShowWrapper);

// Functions
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Events functions
function onClick() {
    event.target.style.backgroundColor = getRandomColor();
}
function onRightClick() {
    event.target.style.backgroundColor = getRandomColor();
}
function onMouseOver() {
    event.target.style.backgroundColor = getRandomColor();
}
function onScroll() {
    event.target.style.backgroundColor = getRandomColor();
}
function onMouseWhell() {
    event.target.style.backgroundColor = getRandomColor();
}

function ShowWrapper() {
    var wrapper = document.getElementById("wrapper");
    if( wrapper.style.visibility == "visible") {
         wrapper.style.visibility = "hidden";
    }
    else {
        wrapper.style.visibility = "visible";
    }
}