/**
 *  Example 1 - "Date"
 */

function ShowVar(title, variable) {
    document.write("<br>" + title + ": " + variable + "<br>");
}

var date = new Date();

ShowVar("Date()", Date());

// return [1-31]
ShowVar("getDate()", date.getDate());
// return [1-31]
ShowVar("getDay()", date.getDay());
// return [1-12]
ShowVar("getMonth()", date.getMonth());
// return [1970-..]
ShowVar("getFullYear()", date.getFullYear());
// return [0-23]
ShowVar("getHours()", date.getHours());
// return [0-59]
ShowVar("getMinutes()", date.getMinutes());
// return [0-59]
ShowVar("getSeconds()", date.getSeconds());
// return [0-1000]
ShowVar("getMilliseconds()", date.getMilliseconds());
