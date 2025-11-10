var prompt = require('prompt-sync')();

var n1 = parseFloat(prompt("Enter the first number"));
var n2 = parseFloat(prompt("Enter the second number"));
var n3 = parseFloat(prompt("Enter the third number"));

if (n1 > n2) {
    if (n1 > n3)
        console.log(n1, "is largest");
    else
        console.log(n3, "is largest");
} else {
    if (n2 > n3)
        console.log(n2, "is largest");
    else
        console.log(n3, "is largest");
}