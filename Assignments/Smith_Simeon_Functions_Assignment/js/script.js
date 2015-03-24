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
    var lotNumber = [],                 //Setting up internal lottery number array.
        randomNumGen;                   //Setting up internal random number variable.

    for (var ln = 0; ln < qt; ln++) {   //For loop to generate random numbers based on qt parameter.
        randomNumGen = Math.round(Math.random() * (up - low) + low); //Outputting a random number based on the upper  and lower limit parameters.

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


function lotteryTypePrompt (n){ //Defining function name and parameter for prompt limit.

    var florida = false,    //Boolean for internal florida lottery.
        powerball = false,  //Boolean for internal powerball lottery.
        lottery = prompt("Please enter the type of lottery you would like:\n\nIf you would like the Florida Lottery please enter Florida.\n\nIf you would like the Powerball Lottery please enter Powerball."); //User prompt asking what type of lottery they wan.t


    if (lottery === "Florida Lottery" || lottery === "florida lottery" || lottery === "Florida" || lottery === "florida"){                  //Set florida lottery true if parameters are met.

        florida = true;

    }else if (lottery === "Powerball Lottery" || lottery === "powerball lottery" || lottery === "Powerball" || lottery === "powerball"){    //If florida lottery false then set powerball lottery true if parameters are met.

        powerball = true;

    }

    while (!florida && !powerball){     //If both florida and powerball are false then run the following.

        if (n === 1) { //Put a limit on how many times the prompt can be left blank based on the argument for parameter n.
            console.log("You did not enter a valid lottery type.\nWe could not generate your numbers because of this.\nPlease refresh the page if you would like to try again."); //If limit exceeded display this message.
            break;  //If limit exceeded stop code.
        }

        alert("You did not enter a valid lottery type. Please enter exactly what appears in the prompt."); //Display this alert if while is true.

        lottery = prompt("Please enter the type of lottery you would like:\n\nIf you would like the Florida Lottery please enter Florida.\n\nIf you would like the Powerball Lottery please enter Powerball."); //Prompt user again for lottery type.

        if (lottery === "Florida Lottery" || lottery === "florida lottery" || lottery === "Florida" || lottery === "florida"){                  //Set florida lottery true if parameters are met.

            florida = true;

        }else if (lottery === "Powerball Lottery" || lottery === "powerball lottery" || lottery === "Powerball" || lottery === "powerball"){    //If florida lottery false then set powerball lottery true if parameters are met.

            powerball = true;

        }

        n--; //Subtract 1 from n before repeating while.

    }

    return lottery; //Return lottery variable.
}


/*MAIN CODE*/

lotteryType = lotteryTypePrompt(5); //Make lotteryType the results of the lotteryTypePrompt function with a 5 prompt limit.


if (lotteryType === "Florida Lottery" || lotteryType === "florida lottery" || lotteryType === "Florida" || lotteryType === "florida"){                  //Set florida lottery true if parameters are met.

    floridaLottery = true;

}else if (lotteryType === "Powerball Lottery" || lotteryType === "powerball lottery" || lotteryType === "Powerball" || lotteryType === "powerball"){    //If florida lottery false then set powerball lottery true if parameters are met.

    powerballLottery = true;

}


if (floridaLottery){    //If Florida Lottery is true run the following.

    console.log("You chose the Florida Lottery.");  //Display this message if true.

    lotteryNums = lotteryNumGen(1, 53, 6);          //Make lotteryNums the results of lotteryNumGen with a low of 1, an upper of 53 and a total of 6 numbers.

    console.log("Your numbers are " + lotteryNums[0] + " " + lotteryNums[1] + " "+ lotteryNums[2] + " " + lotteryNums[3] + " " + lotteryNums[4] + " " + lotteryNums[5] + ".");  //Display the lottery numbers.

}else if (powerballLottery){    //If Florida Lottery false and Powerball Lottery true run the following.

    console.log("You chose the Powerball Lottery.");    //Display this mesage of true.

    lotteryNums = lotteryNumGen(1, 59, 5);              //Make lotteryNums the result of lotteryNumGen with the low of 1, an upper of 59 and a total of 5 numbers.

    lotteryNums[5] = lotteryNumGen(1, 35, 1);           //Add a sizth number to lotteryNums that is a reuslt of lotteryNumGen with a low of 1, and an upper of 35. This number can be the same as any of the other 5.

    console.log("Your numbers are " + lotteryNums[0] + " " + lotteryNums[1] + " "+ lotteryNums[2] + " " + lotteryNums[3] + " " + lotteryNums[4] + " and your Powerball number is " + lotteryNums[5] + ".");     //Display the lottery numbers.

}


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

/*Results of "Powerball" in the prompt.
 script.js:153 You chose the Powerball Lottery.
 script.js:159 Your numbers are 51 46 42 31 9 and your Powerball number is 30.
 */

/*Results of "Florida in the prompt.
 script.js:145 You chose the Florida Lottery.
 script.js:149 Your numbers are 48 40 50 37 53 10.
 */

/*Results of "powerrball lottery" in the prompt.
 script.js:153 You chose the Powerball Lottery.
 script.js:159 Your numbers are 27 47 24 26 32 and your Powerball number is 4.
 */

/*Results of "Florida Lottery in the prompt.
 script.js:145 You chose the Florida Lottery.
 script.js:149 Your numbers are 46 4 5 27 9 28.
 */

/*Results of nothing in all prompts.
 script.js:101 You did not enter a valid lottery type.
 We could not generate your numbers because of this.
 Please refresh the page if you would like to try again.
 */

/*Results of "asdf" in all prompts.
 script.js:101 You did not enter a valid lottery type.
 We could not generate your numbers because of this.
 Please refresh the page if you would like to try again.
 */

/*Results of "Powerball" in the 5th and final prompt.
 script.js:153 You chose the Powerball Lottery.
 script.js:159 Your numbers are 35 1 24 57 53 and your Powerball number is 35.
 */