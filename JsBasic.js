var myname = "Taimoor";
console.log(myname);
var myage = "21";
console.log(typeof(myage));


/* Arrays */

var colors = new Array("red", "green", "blue");
console.log(colors);
console.log("length of array: " + colors.length);
console.log(colors[0]);
var animals = ["dog", "cat", "bird"];
console.log(animals.length);
animals.push("elephant");
console.log(animals);
animals.pop("dog");
console.log(animals);
colors.sort();
console.log(colors);
colors.reverse();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("black");
console.log(colors);
colors.splice(2,2);
console.log(colors);