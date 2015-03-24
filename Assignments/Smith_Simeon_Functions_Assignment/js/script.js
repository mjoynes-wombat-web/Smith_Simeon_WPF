/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Functions Assignment
March 23, 2013
 */

/* INSTRUCTIONS
 a. At least one function.
 b. Any functions created must use arguments and parameters.
 c. A value must be returned for each function.
 d. You must not use “main code” variable inside of a function; you must pass values
    in as arguments and out as returned values.
 e. All user prompts must be validated using a while loop.

 CRITERIA
 You will need to create code that returns random numbers for each group of lottery
 numbers.
 • Keep in mind that the regular Florida lottery has six random numbers between 1 and 53;
 the Powerball lottery has five random numbers between 1 and 59 and a Powerball
 between 1 and 35.
 • Each random number must be different; a lottery will never have two of the same
 number unless it is the final Powerball number.
 • You should have at least one prompt to ask the user if they want the numbers for the
 Florida lottery or for the Powerball lottery.
 o Each prompt should be validated using a while loop.
 • The result should appear in the browser's console and include an explanation of the
 result.
 o Good example of console.log: The volume of the sphere is 26 feet cubed.
 o Bad example of console.log: 26
 • Final output should use string concatenation.
 • Comment every line of code (describe what each line is doing in English). Do NOT just
 label sections of your code.
 • Your code must contain at least one function
 • Each function must use arguments and parameters.
 • A value must be returned for every function you create.
 • You must not use global (“main code”) variables inside of a function; you must pass
 them in as	arguments.
 */


/*VARIABLES*/

var lotteryNums;


/*FUNCTIONS*/

//Random lottery number generation.

function lotteryNumGen (up, low, qt) {
    var lotNumber = [];

    for (var ln = 0; ln < qt; ln++) {
        var randomNumGen = Math.round(Math.random() * (up - low) + low);

        lotNumber[ln] = randomNumGen;

    }

    return lotNumber;

}

var ln = 3;
var lotNumber = [115, 112, 115, 115];
console.log(lotNumber);
var up = 115;
var low = 114;

for (var n  = 0; ln > n; n++) {
    if (lotNumber[n] === lotNumber[ln]){
        lotNumber[ln] = Math.round(Math.random() * (up - low) + low);

        n--;
        console.log(lotNumber);
        console.log(n)
    }
    console.log(n);
}

/* OUTPUT FROM THIS CODE
 script.js:68 [115, 112, 115, 115]
 script.js:77 [115, 112, 115, 115]
 script.js:78 -1
 script.js:80 -1
 script.js:77 [115, 112, 115, 114]
 script.js:78 -1
 script.js:80 -1
 script.js:80 0
 script.js:80 1
 script.js:80 2
 */


/*MAIN CODE*/

//lotteryNums = lotteryNumGen(53, 1, 6);
//console.log(lotteryNums);