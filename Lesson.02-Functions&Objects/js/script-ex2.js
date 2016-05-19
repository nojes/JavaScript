function showCalc(a, b, operation, res) {
    document.write(a + " " + operation + " " + b + " = " + res);
}

function Max(a, b) {
    return (a > b) ? a : b;
}
function Min(a, b) {
    return (a > b) ? b : a;
}

function Pow(val, n) {
    var sum = val;
    for(var i = 0; i < n - 1; i++) {
        sum *= val;
    }
    return sum;
}

function Calc(a, b, operation) {
    var res = 0;

    switch (operation) {
        case '+':
            res = a + b;
            break;
        case '-':
            res = a - b;
            break;
        case '*':
            res = a * b;
            break;
        case '/':
            res = a / b;
            break;
        case '^':
            res = Pow(a, b);
            break;
        }
    return res;
}

var a = parseInt(prompt("Put a"), a);
var b = parseInt(prompt("Put b"), b);
var operation = prompt("Operation");

showCalc(a, b, operation, Calc(a, b, operation));

//
//var obj = {
//    cars: [
//        "bmw", "renault", "citroen", "audi"
//    ]
//}
//document.write("<br>" + obj.cars);
