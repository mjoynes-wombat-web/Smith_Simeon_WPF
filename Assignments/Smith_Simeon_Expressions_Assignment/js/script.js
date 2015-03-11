// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Expressions Assignment
// 3-10-2015


/*VARIABLES*/

var title = "Checking Your MPG History.\n",     //Title for the top of the prompts.
    warning = "\nPlease only enter numbers.",   //Warning to only use numbers.
    last4Mpg = [22, 19, 16, 25],                //Last 4 MPG results from fill ups.
    last4Price = [2.50, 2.25, 2.15, 1.92],      //Last 4 prices per gallon from fill ups.
    gallons,                                    //Variable place holder for user gallons prompt.
    miles,                                      //Variable place holder for user miles prompt.
    price,                                      //Variable place holder for user price prompt.
    currentMpg,                                 //Variable place holder for the current MPG calculation.
    currentPrice,                               //Variable place holder for the current price per gallon.
    last5PriceAvg,                              //Variable place holder for the last 5 price per gallon average.
    priceChange,                                //Variable place holder for the price change calculation.
    last5MpgAvg,                                //Variable place holder for the last 5 mpg average.
    mpgChange;                                  //Variable place holder for the price change calculation.


/*USER PROMPTS */

gallons = Number(prompt(title + "How many gallons did you put in the car?" + warning));               //Asking the user to define the number of gallons filled up.
miles = Number(prompt(title + "How many miles did you drive since your last fill up?" + warning));    //Asking the user to define the number of miles driven since the last fill up.
price = Number(prompt(title + "What was the total cost of this fill up?" + warning));                 //Asking the user to enter the total cost of the fill up.


/*FIRST CALCULATIONS*/

currentMpg = miles / gallons;                                                                   //Calculating mpg from user input.
currentPrice = price / gallons;                                                                 //Calculating price per gallon from user input.
last5PriceAvg = last4Price[0] + last4Price[1] + last4Price[2] + last4Price[3] + currentPrice;   //Adding price to prep for division.
last5PriceAvg /= 5;                                                                             //Dividing to find the average price.


/*FIRST CONSOLE OUTPUTS*/

console.log("Your current mpg is " + currentMpg + " mpg and cost you $" + currentPrice + " per gallon." );  //Outputting the MPG and price per gallon.
console.log("The price per gallon average from the last 5 fill ups is $" + last5PriceAvg + ".");            //Outputting the average price per gallon for the last 5 fill ups.


/*SECOND CALCULATIONS*/

priceChange = currentPrice - last5PriceAvg; //Calculating the change in price.
currentPrice += priceChange;                //Calculating the possible price for the next fill up if the trend continues.


/*SECOND CONSOLE OUTPUTS*/

console.log("The is a " + priceChange + " change for this fill up. If this trend continues your price will be $" + currentPrice + " next time.");  //Outputting the price change and the possible next price based on the trend.


/*THIRD CALCULATIONS*/

last5MpgAvg = last4Mpg[0] + last4Mpg[1] +last4Mpg[2] +last4Mpg[3] + currentMpg; //Adding mpg to prep for division.
last5MpgAvg /= 5;                                                               //Dividing to find the average mpg.


/*THIRD CONSOLE OUTPUTS*/

console.log("Your mpg average from the last 5 fillups is " + last5MpgAvg + " mpg.");


/*FOURTH CALCULATION*/

mpgChange = currentMpg - last5MpgAvg;
currentMpg += mpgChange;


/*FOURTH CALCULATION*/

console.log("This is a " + mpgChange + " mpg change for this fillup. If this trend continues your mpg will be " + currentMpg + " next time.");

/*TESTING SECTION*/

//alert(title+"This is a test.");                 //Test of the new line in the title variable.

//console.log(gallons, miles, price);             //Testing the user input.

//console.log(currentMpg);                        //Testing current mpg.

//console.log(last5PriceAvg);                     //Testing current mpg

//console.log(price, last5PriceAvg, priceChange); //Testing price change calculation.

//console.log(currentPrice);                      //Price difference calculation test.

//console.log(last5MpgAvg);                       //Test of last 5 price average calculation.

//console.log(mpgChange, currentMpg);             //Test of mpg change calculations.

