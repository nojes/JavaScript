function showCalc(a, b, operation, res) {
    console.log(a + " " + operation + " " + b + " = " + res);
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
            var sum = b;
            for(var i = 0; i < b - 1; i++) {
                sum *= b;
            }
            res = sum;
            break;

        case 'max':
            res = (a > b) ? a : b;
            break;
        case 'min':
            res = (a < b) ? a : b;
            break;
        }
    return res;
}

function Max(a, b) {
    return (a > b) ? a : b;
}

function Pow(val, n) {
    var sum = val;
    for(var i = 0; i < n - 1; i++) {
        sum *= val;
    }
    return sum;
}

var a = parseInt(prompt("Put a"), a);
var b = parseInt(prompt("Put b"), b);
var operation = prompt("Operation");

console.log(operation);
showCalc(a, b, operation, Calc(a, b, operation));

//console.log("Max: " + Max(a, b));

//var n = parseInt(prompt("Put pow"), n);
//console.log("Pow: " + Pow(a, n));


var obj = {
    cars: [
        "bmw", "renault", "citroen", "audi"
    ]
}

console.log(obj.cars);
