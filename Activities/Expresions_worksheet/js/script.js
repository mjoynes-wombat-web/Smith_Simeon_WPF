//Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Expressions Worksheet Activity
// 3-10-2015


//Problem: DOG YEARS

var sparkysAge = 5,//Sparky's real age.
    sparkysDogAge = sparkysAge * 7; //Sparky's age in dog yeras.

console.log("Sparky is " + sparkysAge + " human years old which is " + sparkysDogAge + " in dog years.");

//Problem: SLICE OF PIE P.1

var slicesPerPizza = 8, //Slices per pizza.
    people = 9, //Number of people at the party.
    pizzas = 5; //Number of pizzas ordered.

var slicesPerPerson = pizzas * slicesPerPizza / people; //The number of pizzas times the number of slices per pizza divided by the number of people equals the slices per person.

console.log ("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Problem: SLICES OF PIE P.2

var slicesOfPizza = slicesPerPizza * pizzas,
    slicesForSparky = slicesOfPizza%people;

console.log("Sparky got " + slicesForSparky + " slices of pizza.");

//Problem: AVERAGE SHOPPING BILL

var groceryWeekly = [150, 166, 174, 125, 143],//Array of weekly grocery spending.
    groceryTotal = (groceryWeekly[0] + groceryWeekly[1] + groceryWeekly[2] + groceryWeekly[3] + groceryWeekly[4]),//Total grocery expense for 5 weeks.
    groceryAverage = groceryTotal / 5; //Average grocery expense weekly.

console.log("You have spent a total of $" + groceryTotal + " on groceries over 5 weeks. That is an average of $" + groceryAverage + " per week.");

// Problem: DISCOUNTS

var priceToyTrain = 15,//Price of a toy train.
    discount = 25,//Discount percentage.
    desTrainToy = "Thomas the Tank Engine wooden train",//Toy train description.
    salesTax = 8,//Sales tax percentage.
    subtotalTrainToy = priceToyTrain * (1 - discount / 100),//Subtotal of toy train w/discount before tax.
    totalTrainToy = subtotalTrainToy * (1 + salesTax/100);//Total of toy train with discount and tax.

console.log("Your " + desTrainToy + " was originally $" + priceToyTrain + ", but after a " + discount + "% discount, it is now $" + subtotalTrainToy + " without tax, and $" + totalTrainToy + " with tax.");

