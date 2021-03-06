/* 
Operators, Booleans & Selection in JavaScript
*/

//Boolean 
var isOn = true;
console.log(typeof(isOn));

var isOff = false;
console.log(typeof(isOff));

var green;
console.log(green);/*output: undefined 0r false beacuse in JavaScript, 
and 0 is also false and Nan  and Null*/

//if else
if(isOn){
    console.log("The light is on");
}
else{
    console.log("The light is off");
}

//boolean operators
/**
 * == equal to
 * != not equal to
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 * === strict equal to
 * !== strict not equal to
 * && and
 * || or
 * ! not
 */
var value1 = 10;
var value2 = 20;
var Sval = "10";
if(value1 == value2){
    console.log("value1 is equal to value2");
}
else{
    console.log("value1 is not equal to value2");
}
//== is equal to and === is strict equal to
if(value1 == Sval){
    console.log("value1 is equal to Sval");// Output: value1 is equal to Sval
}
else{
    console.log("value1 is not equal to Sval");
}

if(value1===Sval){
    console.log("value1 is equal to Sval");// Output: value1 is not equal to Sval
}
else{
    console.log("value1 is not equal to Sval");
}


// Working with else if
var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
if(colors.indexOf("blue") > -1){
    console.log("blue is in the colors array");
}
else if(colors.indexOf("pink") > -1){
    console.log("pink is in the colors array");
}
else if(colors.indexOf("black") > -1){
    console.log("black is in the colors array");
}
else{
    console.log("Target Color is not in the colors array");
}


// Switch Statement
var names = new Array("John", "Jane", "Mary", "Mark", "Bob");
var n = names[Math.floor(Math.random() * names.length)];
switch(n){
     case "John":
         console.log("John is selected");
         break;
     case "Jane":
         console.log("Jane is selected");
         break;
     case "Mary":
         console.log("Mary is selected");
         break;
     case "Mark":
         console.log("Mark is selected");
        break;
     case "Bob":
         console.log("Bob is selected");
         break;
     default:
        console.log("No name is selected");
 }

 // using &&
var goodMood = true;
var gotSleep = true;
if (goodMood && gotSleep) {
    console.log("today isagood day");
}
else {
}
console.log("Iam grumpy");

//using **
var num1 = 10;
console.log(num1**2);// Output: 100