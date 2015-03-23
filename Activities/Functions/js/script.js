/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Functions Examples
March 23, 2013
 */

var width = 5;  //Global variable.

//Function Setup
function outptMsg(){
    console.log("Hello World!");
}

function calcArea1(){ //This is a procedure since it doesn't return a value.
    var width = 20; //Function variable. Overrides global variables inside this function only.
    var height = 30;
    var area = width * height;
    console.log(area);
}

console.log(width);

//Function Calls
calcArea1();


/*DOG YEARS*/

var age1 = 3;

//Function Setup
function dogYears(age){ //Between () is the parameter.
    var dogYears = age * 7;
    console.log("Spark is " + dogYears + " years old.")
}

//Function Calls
dogYears(age1); //Between () is the argument.
dogYears(5);

/*RETURNING VALUES*/

//Function Setup //This is a function since it returns a value.
function calcArea2(w, h){
    var area = w * h;
    return area;
}

//Function Calls
var total = calcArea2(30, 10);

console.log(total);

/*ANONYMOUS FUNCTIONS*/
//Must be defined before being called.

//var total = calcArea3(4, 2);
//THIS DOESN"T WORK!
//console.log(total);

//Function Setup
var calcArea3 = function(w, h){
    var area = w * h;
    return area;
};

//Function Calls
var total = calcArea3(5, 13);

console.log(total);