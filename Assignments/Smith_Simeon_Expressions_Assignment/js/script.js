// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Expressions Assignment
// 3-10-2015


/*VARIABLES*/

var title = "Checking Your MPG History.\n",     //Title for the top of the prompts.
    warning = "\n Please only enter numbers.",   //Warning to only use numbers.
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

gallons = Number(prompt(title + "How many gallons did you put in the car?"));               //Asking the user to define the number of gallons filled up.
miles = Number(prompt(title + "How many miles did you drive since your last fill up?"));    //Asking the user to define the number of miles driven since the last fill up.
price = Number(prompt(title + "What was the total cost of this fill up?"));                 //Asking the user to enter the total cost of the fill up.


/*INITIAL CALCULATIONS*/



/*TESTING SECTION*/

//alert(title+"This is a test.");               //Test of the new line in the title variable.

console.log(gallons, miles, price);             //Testing the user input.

