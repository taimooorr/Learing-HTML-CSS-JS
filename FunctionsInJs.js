//Functions
//1. Function Declaration

function doStuff() {
    console.log("I'm doing stuff");
}
//calling the function
//doStuff();

//getting input from the user
// var userInput = prompt("Enter Your Name");
// console.log(userInput);
function getSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var sum = getSum(1, 2);
console.log(sum);
//annonymous function
var myFunction = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(myFunction(1, 2));