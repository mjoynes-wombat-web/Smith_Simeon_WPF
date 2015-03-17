/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Conditionals Worksheet
March 21, 2013
 */

//Activity - Group 1: Last Chance for Gas!

var mpg = prompt("What is your average mpg?");
var gasTankLvl = prompt("What percentage full is your tank?");
var gasTankSize = prompt("How many gallons can your tank hold?");
var disToGas = 200;
var galInTank = gasTankLvl / 100 * gasTankSize;
var milesToEmpty = galInTank * mpg;

if (disToGas < milesToEmpty){
    console.log("You can make it without stopping for gas!");
}else{
    console.log("You only have " + galInTank + " gallons of gas in your tank, better get gas now while you can!")
}


//Activity - Group 2: Check the Login

var usrUsername = prompt("Username:");
var usrPassword = prompt("Password:");
var sysUsername = "admin";
var sysPassword = "password";

if(usrUsername === sysUsername && usrPassword === sysPassword){
    console.log("Welcome, " + sysUsername + "!");
}else if (usrUsername === sysUsername && usrPassword != sysPassword){
    console.log("Password does not match our records.");
}else{
    console.log("User not found. Try again.")
}

//Activity - Group 3: Tire Pressure I

var pressureTire1 = 32,
    pressureTire2 = 32,
    pressureTire3 = 30,
    pressureTire4 = 30;

if(pressureTire1 === pressureTire2 && pressureTire3 === pressureTire4){
    console.log("The tires pass spec!");
}else{
    console.log("Get your tires checked out!");
}
