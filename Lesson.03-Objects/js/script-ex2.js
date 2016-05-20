/**
 *  Example 2 - "Array Methods"
 */

function ShowArray(arr, title) {
    document.write(title + ": <br>");
    for(var i = 0; i < arr.length; i++) {
        document.write(("[" + i + "]") + " => " + (arr[i] + "<br>"));
    }
    document.write("<br>");
}

var arr = [1, 2, 3, 4, 5];
ShowArray(arr, "Array");

arr.push(6);
ShowArray(arr, "Push (6)");

arr.unshift(7);
ShowArray(arr, "UnShift (7)");

arr.pop();
ShowArray(arr, "Pop");

arr.shift();
ShowArray(arr, "Shift");

document.write("------------------------ <br>");
var x = [ 15, 4, 22, 47, 1, 34, 7, 71 ];
var y = [ 12, 1, 62, 17, 4, 34, 6, 11 ];

ShowArray(x, "Array X");
ShowArray(y, "Array Y");

ShowArray(x.reverse(), "Reverse");
ShowArray(x.sort(), "Sort");
ShowArray(x.slice(0, 4), "Slice");
x.splice(1, 5, 8);
ShowArray(x, "Splice");
ShowArray(x = x.concat(y), "Concat");
ShowArray(x.join(' | '), "Join");
document.write(x.join(' | ') + "<br>");
