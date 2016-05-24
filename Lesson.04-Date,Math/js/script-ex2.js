/**
 *  Example 2 - "Check friends Birthday"
 */

function ShowVar(title, variable) {
    document.write("<br>" + title + ": " + variable + "<br>");
}

var fr1 = {
    name: "Vasya",
    d: 1,
    m: 2
}
var fr2 = {
    name: "Petya",
    d: 24,
    m: 5
}

var friends = [ fr1, fr2 ];

function checkDate(day, month) {
    var date = new Date();
    if (day == date.getDate() && month == date.getMonth() + 1) {
        return true;
    }
    else {
        return false;
    }
}

function checkBirthday(friends) {
    for (var f in friends) {
        if (checkDate(friends[f].d, friends[f].m)) {
            var out = "Today's " + friends[f].name + " Birthday!";
            document.write(out);
        }
    }
}

checkBirthday(friends);
