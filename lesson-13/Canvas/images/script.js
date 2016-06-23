

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var index = 0;
var path = '../../../lesson-9/DOM/ex2-LandingPage/img/';
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

var img = new Image();
ChangeImage();

var interval;
var ms = 2000;
RunInterval();

canvas.addEventListener('click', ChangeImage);
canvas.addEventListener('mouseout', RunInterval);
canvas.addEventListener('mouseover', StopInterval);

function ChangeImage() {
    if (index == images.length) {
        index = 0;
    }

    img.src = path + images[index++];

    img.onload = function () {
        c.clearRect(0, 0, 800, 480);
        c.drawImage(img, 0, 0);
        console.log(img.src);
    };
}

function RunInterval() {
    interval = setInterval(ChangeImage, ms);
}

function StopInterval() {
    clearInterval(interval);
}