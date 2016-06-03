/**
 *  Example 3 - "Interval"
 */


setInterval(function nTime() {
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    var res = h + ":" + m + ":" + s;
    console.clear();
    console.log(res);
}, 1000);

setInterval();
