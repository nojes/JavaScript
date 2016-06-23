

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.fillStyle = 'indigo';
    context.strokeStyle = 'indigo';
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(100, 100);
    context.lineTo(200, 0);
    context.lineTo(100, 0);
    context.stroke();
    context.fill();

    context.strokeRect(0, 200, 100, 100);
    context.fillRect(10, 210, 100, 100);

    //context.fillRect(325, 245, 150, 50);
    context.beginPath();
    context.fillStyle = 'rgba(255, 181, 147, 0.5)';
    context.arc(400, 300, 100, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    var eye = canvas.getContext('2d');
    eye.fillStyle = 'darkcyan';
    eye.strokeStyle = 'darkcyan';

    eye.beginPath();
    eye.arc(370, 270, 10, 0, 2 * Math.PI);
    eye.fill();
    eye.stroke();

    eye.beginPath();
    eye.arc(430, 270, 10, 0, 2 * Math.PI);
    eye.fill();
    eye.stroke();

    var mouth = canvas.getContext('2d');
    mouth.fillStyle = 'rosybrown';
    mouth.strokeStyle = 'rosybrown';
    mouth.beginPath();
    mouth.arc(400, 340, 25, 0, 1 * Math.PI);
    mouth.fill();
    mouth.stroke();

};

