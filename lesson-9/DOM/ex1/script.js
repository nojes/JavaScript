var ul = document.getElementById('ul');
var wrapper = document.getElementById('wrapper');

var li = document.createElement('li');
var img = document.createElement('img');
var txt_hello = document.createTextNode("HELLO");

ul.appendChild(li);
li.appendChild(txt_hello);
img.setAttribute("src", "http://www.ellf.ru/uploads/posts/2014-07/1404710848_010-ellf.ru.jpg");

wrapper.appendChild(img);
ul.insertBefore(img, ul.children[3]);


function AddToUl() {
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    li.innerHTML = "new li";
    ul.appendChild(li);
}

var btn = document.getElementById('btn').addEventListener('click', AddToUl);
