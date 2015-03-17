/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Conditionals Assignment
March 21, 2013
 */

/*
Requirements

a.  An example of 2 different arithmetic operators (addition and subtraction,
    addition and multiplication, subtraction and division, etc.).
b.  2 conditional statements – A least one must contain an else if statement
c.  At least 1 ternary conditional statement must be used
d.  At least 1 Logical Operator && , || or !
e.  Must contain at least 3 user prompts that are used in calculations
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

var monthlyPay = 0,     //Users monthly pay
    monthlyBills,   //Users monthly bills
    housePrice,     //House price
    interestRate,   //Loan interest rate
    loanTerm,        //Length of loan
    downPayment;    //House down payment


/*FUNCTIONS*/

//Monthly Pay Functions
function monthlyPayPrompt(){    //User prompt asking for monthly pay and validation call.
    monthlyPay = Number(prompt("How much do you make a month? \nPlease enter only numbers."));
    monthlyPayValidate();
}

function monthlyPayValidate(){  //Monthly pay validation and alert if not a number. Recalls prompt.
    if(isNaN(monthlyPay)){
        alert("You didn't enter a number for your pay. \nPlease enter only a number.");
        monthlyPayPrompt();
        monthlyPayValidate();
    }else{
        monthlyBillsPrompt();
    }
}

//Monthly Bills Functions
function monthlyBillsPrompt(){  //User prompt asking for monthly bills and validation call.
    monthlyBills = Number(prompt("What is your monthly expenses? \nPlease enter only numbers."));
    monthlyBillsValidate();
}

function monthlyBillsValidate(){  //Monthly bills validation and alert if not a number. Recalls prompt.
    if(isNaN(monthlyBills)){
        alert("You didn't enter a number for your expenses. \nPlease enter only a number.");
        monthlyBillsPrompt();
        monthlyBillsValidate();
    }else{
        housePricePrompt();
    }
}

//House Price Functions
function housePricePrompt(){    //User prompt asking for the house price and validation call.
    housePrice = Number(prompt("What is the price of the house? \nPlease enter only numbers."));
    housePriceValidate();
}

function housePriceValidate(){  //House price validation and alert if not a number. Recalls prompt.
    if(isNaN(housePrice)){
        alert("You didn't enter a number for the price of the house. \nPlease enter only a number.");
        housePricePrompt();
        housePriceValidate();
    }else{
        interestRatePrompt();
    }
}

//Interest Rate Functions
function interestRatePrompt(){  //User prompt asking for the loan interest rate.
    interestRate = Number(prompt("What is the loan interest rate? \nPlease enter the interest rate as a whole number e.g. 50%=50."));
    interestRateValidate();
}

function interestRateValidate(){    //Interest rate validation and alert if not a number. Recalls prompt.
    if(isNaN(interestRate)){
        alert("You didn't enter a number for the interest rate. \nPlease enter only numbers.");
        interestRatePrompt();
        interestRateValidate();
    }else{
        loanTermPrompt();
    }
}

//Loan Term Functions
function loanTermPrompt(){  //User prompt asking for the loan term length.
    loanTerm = Number(prompt("What is the loan term length? \nPlease enter the term in months and only as a number."));
    loanTermValidate();
}

function loanTermValidate(){    //Interest rate validation and alert if not a number. Recalls prompt.
    if(isNaN(loanTerm)){
        alert("You didn't enter a number for the loan term. \nPlease enter only numbers.");
        loanTermPrompt();
        loanTermValidate();
    }else{
        downPaymentPrompt();
    }
}

//Down Payment Functions
function downPaymentConfirm(){   //User prompt asking if there was a down payment.
    downPayment = confirm("Was a down payment made on the house? Click OK if yes and Cancel if no.");
    downPaymentPrompt();
}

function downPaymentPrompt(){   //User prompt asking for the amount of the down payment.
    if(downPayment) {
        downPayment = Number(prompt("How much was the down payment on the house? \nPlease enter only numbers."));
        downPaymentValidation();
    }else{
    }
}

function downPaymentValidation() {  //Down payment validation and alert if not a number. Recalls downPaymentPrompt.
    if(isNaN(downPayment)) {
        alert("You didn't enter a number for the loan term. \nPlease enter only numbers.");
        downPaymentPrompt();
    }else{
    }

}

//monthlyPayPrompt();
//monthlyBillsPrompt();
//interestRatePrompt();
//loanTermPrompt();
downPaymentConfirm();
