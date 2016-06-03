/**
 * Example 1 - "Discounts for education"
 */

// Variables
var discount = 0;
var sum = 0;
var month_pay = 1000;
var studied = confirm("You have studied?");
var with_friend = confirm("You came with a friend?");
var full_pay = confirm("You want to pay the full course?");

// Discounts
var DIS_STUDIED = 5;
var DIS_WITH_FRIEND = 10;
var DIS_FULL_PAY = 10;

// Calc
(studied) ? discount += DIS_STUDIED : 0;
(with_friend) ? discount += DIS_WITH_FRIEND : 0;
(full_pay) ? discount += DIS_FULL_PAY : 0;
sum = month_pay - (month_pay * discount / 100);

// Output
document.write("To pay: " + sum + " UAN" + " (discount " + discount + "%)");
