/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Conditionals Activity
March 21, 2013
 */

//Temperature based on user input.
/*
var temp = prompt("What is the temperature?");

if(temp > 65){
    console.log("It's warm!");
}else{
    console.log("It is cold!");
}
*/


var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45;


//If the kid is over 48 inches in height.
if(kidHeight > minHeight){
    //You can ride!
    console.log("You can ride the roller coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent present.
    console.log("You can ride but only with a parent present.")
}else{
    //Code to perform if condition is false.
    console.log("Sorry kid, you've got some growing to do first!");
}

//console.log("I always print.");