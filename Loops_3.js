//for loop
var colors = new Array("red", "green", "blue", "yellow");
for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
//for each or For .. of
for(var i of colors){
    console.log(i);
}

var num =2;
for(var i =1;i<=10;i++){
    console.log(num+"*"+i+"="+num*i);
}
//while loop    
var i =0;
while(i<10){
    console.log("Hello Word");
    i++;
}
//with tech mark ``
while(i<5){
    console.log(`Hello Word ${i}\n`);
    i++;
}