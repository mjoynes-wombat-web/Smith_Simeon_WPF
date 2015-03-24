/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Week 4 GTT
March 21, 2013
 */

//Variables
var myName = prompt("Enter your name please:");
var myRandom;

//Functions
function nameValidation(firstName) { //Validation of myName variable.

    var timesClicked = 1; //Defining timesClicked

    while (firstName === ""){ //Run if firstName is blank.
        firstName = prompt("Do not leave this blank.\n\nPlease enter your first name.");

        timesClicked++;
        if (timesClicked === 10) { //Put a limit on how many times the prompt can be left blank.
            console.log("You did not enter anything for the name. We could not complete the activity.");
            break;
        }
    }

    if (timesClicked < 10) { //
        console.log("You entered: " + firstName + ".");
    }

    return firstName;
}

function randomNumGen(max, min, num) {

    var randomArray = [];

    for (var i = 0; i < num; i++) {
        var myRandomNumber = Math.round(Math.random() * (max - min) + min);

        randomArray[i] = myRandomNumber;
    }

    return randomArray;
}

//Main Code

myName = nameValidation(myName);

console.log("Hello, " + myName + ". Welcome!");

myRandom = randomNumGen(50, 10, 5);
console.log(myRandom);
myRandom = randomNumGen(1000, 50, 10);
console.log(myRandom);