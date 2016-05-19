/**
 *  Example 3 - Homework
 *  "Functions for array"
 */

var arr = [ 5, -5, 22, 57, 0, -36, 44, -25, 12, 1, 0, -33 ];

function ShowArray(arr, title) {
    document.write(title + ": <br>");
    for(var i = 0; i < arr.length; i++) {
        document.write(("[" + i + "]") + " => " + (arr[i] + "<br>"));
    }
    document.write("<br>");
}
function ShowVar(variable, title) {
    document.write(title + ": " + variable + "<br>");
}
function ShowArrayReverse(arr, title) {
    document.write(title + ": <br>");
    for(var i = 0; i < arr.length; i++) {
        document.write(("[" + (arr.length - i - 1) + "]") + " => " + (arr[(arr.length - i - 1)] + "<br>"));
    }
    document.write("<br>");
}
function getNegativeNums(arr) {
    var dest_arr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            dest_arr[j++] = arr[i];
        }
    }
    return dest_arr;
}
function getPositiveNums(arr) {
    var dest_arr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            dest_arr[j++] = arr[i];
        }
    }
    return dest_arr;
}
function getOddNums(arr) {
    var dest_arr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            dest_arr[j++] = arr[i];
        }
    }
    return dest_arr;
}
function getEvenNums(arr) {
    var dest_arr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            dest_arr[j++] = arr[i];
        }
    }
    return dest_arr;
}
function getLessThan(arr, val) {
    var dest_arr = [];
    var j = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < val) {
            dest_arr[j++] = arr[i];
        }
    }
    return dest_arr;
}
function AmountOf(arr, val) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            count++;
        }
    }
    return count;
}
function getAvg(arr) {
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    return (avg / arr.length);
}
function getMax(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
       if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function getMin(arr) {
    var min = arr[0];
    for(var i = 1; i < arr.length; i++) {
       if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

ShowArray(arr, "Array");
ShowArray(getEvenNums(arr), "Even numbers");
ShowArray(getOddNums(arr), "Odd numbers");
ShowArrayReverse(arr, "Reverse Array");
ShowArray(getNegativeNums(arr), "Negative numbers");
ShowArrayReverse(getPositiveNums(arr), "Positive numbers in reverse");
ShowArray(getLessThan(getOddNums(arr), -5), "Negative odd numbers that are less -5");
ShowVar(AmountOf(arr, 0), "Number of zeros");
ShowVar(getAvg(arr), "Average");
ShowVar(getMax(arr), "Max number");
ShowVar(getMin(arr), "Min number");
