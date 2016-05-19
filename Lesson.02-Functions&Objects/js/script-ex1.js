/**
 * Example 1 - "Discounts for education"
 */

// Variables
var discount = 0;
var month_pay = 1000;
var sum = 0;
var studied = confirm("You have studied?");
var with_friend = confirm("You came with a friend?");
var full_pay = confirm("You want to pay the full course?");

// Discounts
var dis_per_studied = 5;
var dis_per_with_friend = 10;
var dis_per_full_pay = 10;

// Discount calc
(studied) ? discount = dis_per_studied : 0;
(with_friend) ? discount += dis_per_with_friend : 0;
(full_pay) ? discount += dis_per_full_pay : 0;
sum = month_pay - (month_pay * discount / 100);

// Output
console.log("To pay: " + sum + "грн" + " (discount " + discount + "%)");
