/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Conditionals Assignment
March 21, 2013
 */

/*
Requirements

//a.  An example of 2 different arithmetic operators (addition and subtraction,
    addition and multiplication, subtraction and division, etc.).
//b.  2 conditional statements – A least one must contain an else if statement
//c.  At least 1 ternary conditional statement must be used
//d.  At least 1 Logical Operator && , || or !
//e.  Must contain at least 3 user prompts that are used in calculations
f.  All prompts must be validated

Instructions

 d. Continuously commit your files to your GitHub repo throughout the development
    process.  You should have a minimum of 5 meaningful commits for this assignment.
 e. Your code should give the user meaningful output.  So, after your calculations are
    complete, your code should report back to the user the final values with a console.log().
    This should contain the variables that you calculated and a concatenation text string
    that describes the value. e.g.  console.log(“The area of the rectangle is “ +calcArea+ ”!”);
 f. After your code is complete, make sure you test your final files.  Try typing in
    different values to see what you get.  Put these test values in a multi-lined comment
    at the bottom of your js file. e.g. /*  I typed in 5 for length and 6 for height and my
    calculator gave me 30 for the area.*/


/* VARIABLES */

var monthlyPay,         //User's monthly pay
    monthlyBills,       //User's monthly bills
    itemPrice,          //Item price
    interestRate,       //Loan interest rate
    loanTerm,           //Length of loan
    monthlyBudget,      //Budgeted boolean
    monthlyBudgetAmt = 9999999999999999999999999999,   //Monthly budget for loan.
    monthlyExcess,      //Extra money after bills
    monthlyBuffer,      //17% Buffer on loan
    monthlyPayment,     //Monthly payment amount
    interestPaid,       //Total interest paid
    totalPaid;          //Total amount paid


/*FUNCTIONS*/

//Monthly Pay Functions
function monthlyPayPrompt(){    //User prompt asking for monthly pay and validation call.
    monthlyPay = Number(prompt("How much do you make a month? \nPlease enter only numbers."));
    monthlyPayValidate();
}

function monthlyPayValidate(){  //Monthly pay validation and alert if not a number and recalls prompt, else calls monthly bills prompt.
    if(isNaN(monthlyPay)){
        alert("You didn't enter a number for your pay. \nPlease enter only a number.");
        monthlyPayPrompt();
    }else{
        monthlyBillsPrompt();
    }
}

//Monthly Bills Functions
function monthlyBillsPrompt(){  //User prompt asking for monthly bills and validation call.
    monthlyBills = Number(prompt("What is your monthly expenses? \nPlease enter only numbers."));
    monthlyBillsValidate();
}

function monthlyBillsValidate(){  //Monthly bills validation and alert if not a number and recalls prompt, else calls house price prompt.
    if(isNaN(monthlyBills)){
        alert("You didn't enter a number for your expenses. \nPlease enter only a number.");
        monthlyBillsPrompt();
    }else{
        housePricePrompt();
    }
}

//House Price Functions
function housePricePrompt(){    //User prompt asking for the house price and validation call.
    itemPrice = Number(prompt("What is the price of the item to be financed? \nPlease enter only numbers."));
    housePriceValidate();
}

function housePriceValidate(){  //House price validation and alert if not a number and recalls prompt, else calls interest rate prompt.
    if(isNaN(itemPrice)){
        alert("You didn't enter a number for the price of the item. \nPlease enter only a number.");
        housePricePrompt();
    }else{
        interestRatePrompt();
    }
}

//Interest Rate Functions
function interestRatePrompt(){  //User prompt asking for the loan interest rate and validation call.
    interestRate = (Number(prompt("What is the loan interest rate? \nPlease enter the interest rate as a whole number e.g. 50%=50.")))/100;
    interestRateValidate();
}

function interestRateValidate(){    //Interest rate validation and alert if not a number and recalls prompt, else calls loan term prompt.
    if(isNaN(interestRate)){
        alert("You didn't enter a number for the interest rate. \nPlease enter only numbers.");
        interestRatePrompt();
    }else{
        loanTermPrompt();
    }
}

//Loan Term Functions
function loanTermPrompt(){  //User prompt asking for the loan term length and validation call.
    loanTerm = Number(prompt("What is the loan term length? \nPlease enter the term in months and only as a number."));
    loanTermValidate();
}

function loanTermValidate(){    //Interest rate validation and alert if not a number and recalls prompt, else cal monthly budget prompt
    if(isNaN(loanTerm)){
        alert("You didn't enter a number for the loan term. \nPlease enter only numbers.");
        loanTermPrompt();
    }else{
        monthlyBudgetPrompt();
    }
}

monthlyPayPrompt(); //Runs monthly pay prompt function which calls the other prompts.

//Monthly Budget Prompt
function monthlyBudgetPrompt() {    //User prompt asking them if they have a budget for the loan.
    monthlyBudget = confirm("Do you have a budget for this loan?");
    monthlyBudgetAmtPrompt();
}

function monthlyBudgetAmtPrompt(){  //User prompt asking for the amount of the monthly budget if there is one, else continue to calculations.
    if(monthlyBudget){
        monthlyBudgetAmt = Number(prompt("What is your monthly budget for this item? \nPlease enter only numbers."));
        monthlyBudgetAmtValidate();
    }else{

    }
}

function monthlyBudgetAmtValidate(){ //Monthly budget validation, alert if not a number and recalls monthly budget prompt, else continues with calculations.
    if(isNaN(monthlyBudgetAmt)){
        alert("You didn't enter a number for your monthly budget. We will confirm that you wanted to enter a budget. \nPlease enter only numbers.");
        monthlyBudgetPrompt();
    }else{

    }
}


/*CALCULATIONS*/

//interestPaid = (Premium * (interest/12*(Math.pow(((1+interest)/12), term))))/((Math.pow((1+interest/12), term)-1)

monthlyExcess = monthlyPay - monthlyBills;          //Calculates the amount of money left over after paying bills for the month.
monthlyPayment = itemPrice * ((interestRate/12*(Math.pow((1+interestRate/12), loanTerm)))/((Math.pow((1+interestRate/12), loanTerm)-1)));   //Calculates the monthly payments.
monthlyBuffer = monthlyExcess - monthlyPayment;     //Calculates the amount of money that will be left over after paying the loan.
minMonthlyBuffer = monthlyPayment * .17;            //Calculates the minimum recommended buffer each month.
totalPaid = monthlyPayment * loanTerm;              //Calculates the total that will be paid on the loan.
interestPaid = totalPaid - itemPrice;               //Calculates the amount of interest paid on the loan.


/*OUTPUTS*/
(confirm("Would you like to see how much your monthly payment would be?")) ? console.log("Your monthly payment will be $" + monthlyPayment + ".") : ""  ;   //Confirm that the user would like to see the monthly payment amounts

(confirm("Would you like to see how much you will pay?")) ? console.log("You will pay $" + totalPaid + " total for this item.") : "" ;                      //Confirm that the user would like to see the total amount to be paid.

(confirm("Would you like to see how much you will pay in interest?")) ? console.log("You will pay $" + interestPaid + " in interest.") : "" ;               //Confirm that the user would like to see the interest to be paid on the loan.

if(monthlyPayment <= monthlyBudgetAmt && monthlyExcess >= monthlyPayment + minMonthlyBuffer){     //If monthly excess is greater than or equal to the monthly payment plus the buffer display the message.
    console.log("You can afford to finance this item!");
    console.log("You will have a buffer of $" + monthlyBuffer + " a month which is over 17% of the monthly payment. \nThis gives you a safety buffer that allows you to have an extra payment in savings ever 6 months, in case of emergency.");
}else if(monthlyPayment <= monthlyBudgetAmt && monthlyExcess >= monthlyPayment){                  //If monthly excess is greater than or equal to the monthly payment display the message.
    console.log("You can afford to finance this item.");
    console.log("However, you do not have at least a 17% safety buffer. \nYou will only have $" + monthlyBuffer + " extra a month that is not being put towards expenses. \nA buffer of 17% is recommended so that you can put an extra payment in savings every 6 months for safety.");
}else if(monthlyPayment > monthlyBudgetAmt && monthlyExcess >= monthlyPayment){                   //If monthly excess is less than the monthly budget and monthly excess is greater than or equal to the monthly payment display the message.
    console.log("You could afford the loan payments. However, they are higher then your budgeted amount.")
}else{                                                                                          //Else display this message.
    console.log("You cannot afford the monthly loan payments of $" + monthlyPayment + ".");
}


/*TESTING*/

/* Entered 2100 monthly pay, 1500 for expenses, 100000 for item price, 4.5 for interest rate, 360 for loan term length, and no for budget.
* Outputs are listed below:
* Your monthly payment will be $506.68530982588555.
* You will pay $182406.7115373188 total for this item.
* You will pay $82406.7115373188 in interest.
* You can afford to finance this item!
* You will have a buffer of $93.31469017411445 a month which is over 17% of the monthly payment.
* This gives you a safety buffer that allows you to have an extra payment in savings ever 6 months in case of emergency.*/

/* Entered 1500 monthly pay, 1400 for expenses, 10000 for item price, 12 for interest rate, 72 for loan term length, and yes for budget of $100.
 * Outputs are listed below:
 * Your monthly payment will be $195.50192502699034.
 * You will pay $14076.138601943305 total for this item.
 * You will pay $4076.138601943305 in interest.
 * You cannot afford the monthly loan payments of $195.50192502699034.*/

/* Entered 1555 monthly pay, 1400 for expenses, 9000 for item price, 10 for interest rate, 84 for loan term length, and no for budget.
 * Outputs are listed below:
 * Your monthly payment will be $149.41065624197364.
 * You will pay $12550.495124325786 total for this item.
 * You will pay $3550.4951243257856 in interest.
 * You can afford to finance this item.
 * However, you do not have at least a 17% safety buffer.
 * You will only have $5.589343758026359 extra a month that is not being put towards expenses.
 * A buffer of 17% is recommended so that you can put an extra payment in savings every 6 months for safety.*/

/* Entered 2100 monthly pay, 1500 for expenses, 5000 for item price, 14 for interest rate, 36 for loan term length, and yes for budget of $50.
 * Outputs are listed below:
 * Your monthly payment will be $170.88814879012767.
 * You will pay $6151.973356444596 total for this item.
 * You will pay $1151.973356444596 in interest.
 * You could afford the loan payments. However, they are higher then your budgeted amount.*/