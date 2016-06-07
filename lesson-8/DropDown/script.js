document.getElementById("social").addEventListener("mouseover", ShowMenu);

function ShowMenu() {
    var dropdown1 = document.getElementById("dropdown1");
    if(dropdown1.style.display != "none") {
        dropdown1.style.display = "none";
    }
    else {
        dropdown1.style.display = "block";
    }
}
