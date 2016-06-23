var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var index = 0;
var index2 = 1;
var path = '../../../lesson-9/DOM/ex2-LandingPage/img/';
var images = [
    "4.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];

var img = new Image();
var img2 = new Image();

var interval;
var interval_shift;
var ms = 4000;
var x, y, x2, step = 0;
RunInterval();
ChangeImage();

canvas.addEventListener('click', ChangeImage);
canvas.addEventListener('mouseout', RunInterval);
canvas.addEventListener('mouseover', StopInterval);

function ChangeImage() {
    Init();
    SetImagesSrc();

    img.onload = function () {
        ClearCanvas();
        DrawImages();
        interval_shift = setInterval(ShiftImages, 1);
        //console.log(img.src); console.log(img2.src);
    };
    index++;
    index2++;
    //console.log(index); console.log(index2);
}

function Init() {
    x = 0;
    x2 = canvas.width;
    y = 0;
    step = 1.5;
    if (index == images.length) index = 0;
    if (index2 == images.length) index2 = 0;
}

function ClearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function SetImagesSrc() {
    img.src = path + images[index];
    img2.src = path + images[index2];
}

function DrawImages() {
    c.drawImage(img, x, y);
    c.drawImage(img2, x2, y);
}

function ShiftImages() {
    ClearCanvas();
    if (x2 < 3) {
        x2 = 0;
        clearInterval(interval_shift);
    }
    if(x2 < (canvas.width - (canvas.width / 14))) {
        step += 0.10;
    }
    if(x2 < (canvas.width / 4)) {
        step = 3;
    }
    if(x2 < (canvas.width / 16)) {
        step = 1;
    }
    c.drawImage(img, x -= step, y);
    c.drawImage(img2, x2 -= step, y);
    //console.log(x2);
}

function RunInterval() {
    interval = setInterval(ChangeImage, ms);
}

function StopInterval() {
    clearInterval(interval);
}