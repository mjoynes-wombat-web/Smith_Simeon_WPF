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

var lotteryNums,        //Setting up lottery number variable.
    lotteryType,        //Setting up the lottery type variable.
    floridaLottery,     //Setting up the Florida Lottery variable.
    powerballLottery,   //Setting up the Powerball Lottery variable.
    powerball;          //Setting up the Powerball variable.


/*FUNCTIONS*/

//Random lottery number generation.

function lotteryNumGen (low, up, qt) {  //Defining function name, and parameters for quantity, upper limit, and lower limit.
    var lotNumber = [];                 //Setting up internal lottery number array.

    for (var ln = 0; ln < qt; ln++) {   //For loop to generate random numbers based on qt parameter.
        var randomNumGen = Math.round(Math.random() * (up - low) + low); //Outputting a random number based on the upper  and lower limit parameters.

        lotNumber[ln] = randomNumGen;   //Inserting the random number into the lottery number array.

        for (var n = 0; ln > n; n++) {  //If the ln array number is greater then zero then validate and loop through any other numbers.
            if (lotNumber[n] === lotNumber[ln]){    //If the two lottery numbers are equal then do the following.
                lotNumber[ln] = Math.round(Math.random() * (up - low) + low);   //Re-randomizing the lottery number.

                n--;    //Subtract 1 from n so that the number is checked again.
                //console.log(lotNumber);
                //console.log(n)
            }
            //console.log(n);
        }
    }

    return lotNumber;                   //Returning lottery numbers.

}


/*MAIN CODE*/

lotteryType = prompt("Please enter the type of lottery you would like:\n\nIf you would like the Florida Lottery please enter FL-Lottery.\n\nIf you would like the Powerball Lottery please enter Power-Lottery.\n\nIf you would like Powerball numbers please enter Powerball.");

if (lotteryType === "FL-Lottery" || lotteryType === "fl-lottery" || lotteryType === "FL Lottery" || lotteryType === "fl lottery" || lotteryType === "Florida Lottery" || lotteryType === "florida lottery"){

    console.log("You chose the Florida Lottery.");

    lotteryNums = lotteryNumGen(1, 53, 6);

    console.log("Your numbers are " + lotteryNums[0] + " " + lotteryNums[1] + " "+ lotteryNums[2] + " " + lotteryNums[3] + " " + lotteryNums[4] + " " + lotteryNums[5] + ".");

}

//lotteryNums = lotteryNumGen(115, 110, 6);   //Assigning the returned values to a global variable.
//console.log(lotteryNums);


/*TESTS*/

/* Validation Test
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
*/

/* Output from this code.
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

/*Outputs from the call below.

 lotteryNums = lotteryNumGen(115, 110, 6);

 script.js:66 -1
 script.js:68 -1
 script.js:68 0
 script.js:68 1
 script.js:68 0
 script.js:68 1
 script.js:68 2
 script.js:68 0
 script.js:68 1
 script.js:68 2
 script.js:68 3
 script.js:68 0
 script.js:65 [113, 111, 114, 112, 115, 114]
 script.js:66 0
 script.js:68 0
 script.js:68 1
 script.js:65 [113, 111, 114, 112, 115, 110]
 script.js:66 1
 script.js:68 1
 script.js:68 2
 script.js:68 3
 script.js:68 4
 script.js:80 [113, 111, 114, 112, 115, 110]
 */