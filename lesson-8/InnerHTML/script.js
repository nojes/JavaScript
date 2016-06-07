var list = document.getElementById('list');
var li = document.getElementsByTagName('li');
var one = document.getElementById('one');
var two = document.getElementById('two');

console.log(list.nodeType);
console.log(list.innerHTML);
console.log(list.childNodes.length);
console.log(one.innerHTML);
one.innerHTML = "<h3>Some text.</h3>"

var wrapper = document.getElementById('wrapper');
var divs = wrapper.getElementsByTagName('div');

console.log("count od divs: " + divs.length);
console.log(divs);
divs[0].innerHTML = "changed";
divs[2].innerHTML = "changed";
divs[6].innerHTML = "changed";

two.setAttribute('style', 'font-family: sans-serif');
