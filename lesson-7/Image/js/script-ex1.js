/**
 *  Example  - Simple Gallary
 */

// Variables
var img_index = 0;
var images = [
        "../img/1.jpg",
        "../img/2.jpg",
        "../img/3.jpg",
        "../img/4.jpg",
        "../img/5.jpg",
    ];

// get buttons
document.getElementById("btn-prev-img").addEventListener("click", PrevImage);
document.getElementById("btn-next-img").addEventListener("click", NextImage);

// Intervals
setInterval(ChangeImage, 2000);

// Functions
function ChangeImage() {
    if (img_index == images.length - 1) {
        img_index = 0;
    }
    img.src = images[++img_index];
}

function PrevImage() {
    if (img_index == 0) {
        img_index = images.length - 1;
    }
    img.src = images[--img_index];
}

function NextImage() {
    if (img_index == images.length - 1) {
        img_index = 0;
    }
    img.src = images[++img_index];
}
