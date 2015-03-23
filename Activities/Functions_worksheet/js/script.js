/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Functions Worksheet
March 23, 2013
 */

/*CIRCUMFERENCE*/

//Function Setup

function calcCircumference (r) {        //Defining the function and parameters.
    diameter = r * 2;                   //Calculating the diameter
    circumference = diameter * 3.14;    //Calculating the circumference.
    return circumference;               //Returning the circumference.
}

//Function Call

var circleC1 = calcCircumference(5); //Calling the function and defining the returned value.
var circleC2 = calcCircumference(13); //Calling the function and defining the returned value.

//Output

console.log("The circumference of the first circle is " + circleC1 + "."); //Outputting the value.

console.log("The circumference of the second circle is " + circleC2 + "."); //Outputting the value.


/*STUNG*/

var weight = Number(prompt("How much does the animal weight?"));

//Function Setup

function stingsForDeath (w) {           //Defining the function and parameters.
    stingsPerPound = 8.666666667;       //Defining the number of strings per pound the results in death.
    deathStings = stingsPerPound * w;   //Calculating how many stings would cased death based on the person's weight.
    return deathStings;                 //Returning the value.
}

//Function Call

var numStingsForDeath = stingsForDeath(weight); //Calling the function and defining the returned value.

//Output

console.log("It would require " + numStingsForDeath + " to kill an animal weighing " + weight + " pounds."); //Outputting the value.