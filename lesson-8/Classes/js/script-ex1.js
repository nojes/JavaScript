function ChangeClass(id, c1, c2) {
    var block = document.getElementById(id);
    block.onclick = function() {
        if(block.className != c1) {
            block.className = c1;
        }
        else {
            block.className = c2;
        }
    };
}

window.onload = function() {
    ChangeClass("id", "class1", "class2");
}
