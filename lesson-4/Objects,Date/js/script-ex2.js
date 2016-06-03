/**
 *  Example 2 - "Check friends Birthday"
 */

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
var fr3 = {
    name: "Kolya",
    d: 25,
    m: 5
}
var fr4 = {
    name: "Sveta",
    d: 24,
    m: 5
}

var friends = [ fr1, fr2, fr3, fr4 ];

function checkDate(day, month) {
    var date = new Date();
    if (day == date.getDate() && month == date.getMonth() + 1) {
        return true; }
    else {
        return false; }
}

function checkBirthday(friends) {
    for (var f in friends) {
        if (checkDate(friends[f].d, friends[f].m)) {
            var out = "Today's " + friends[f].name + " Birthday!";
            document.write(out + "<br>");
        }
    }
}

checkBirthday(friends);
