/**
 *  Task1
 */

function ShowArray(arr, title) {
    document.write("<br>" + title + ": <br>[ " + arr.join(", ") + " ]" + "<br>");
}
function ShowVar(variable, title) {
    document.write("<br>" + title + ": " + variable + "<br>");
}

/*
    1. Создать простой массив студентов "class1", "class2"
        - вывести отсортированным, через ","
        - вывести 4-го студента из "class1", сохранить в переменную
        - удалить 4-го студента из "class1" и добавить в "class2" вторым
        - объединить массывы и вывести в обратном порядке
*/

var students1 = [
    "Sidorov",
    "Pupkin",
    "Petrov",
    "Korelina",
    "Ahmetov"
]

var students2 = [
    "Gagarin",
    "Petrova",
    "Sidorova",
    "Korelin",
     "Ahmetova"
]

// 1
students1.sort();
students2.sort();
ShowArray(students1, "Students1");
ShowArray(students2, "Students2");

// 2
var student = students1[3];
ShowVar(student, "Fourth student");

// 3
delete students1[students1.indexOf(student)];
ShowArray(students1, "Delete fourth student");
students2[1] = student;
ShowArray(students2, "Students2");

// 4
var students3 = students1.concat(students2);
ShowArray(students3.reverse(), "Concat & Reverse");
