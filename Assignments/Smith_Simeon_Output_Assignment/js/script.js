/**
 * Created by Simeon on 3/4/2015.
 */

// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Output Assignment


var firstName = "Simeon"; //My first name.
var lastName = "Smith"; //My last name.
var yearBirth = 1988; //My year of birth.
var monthBirth = "November"; //My month of birth.
var yearCurrent = new Date().getFullYear(); //Current year.
var placeBirth = "Anchorage, Alaska"; //My location of birth.
var genderMale = true; //My gender.
var relationshipStatus = "married"; //My relationship status.
var parent = true; //My parental status.
var grandparent = false; //My grandparental status.
var numSiblings = 6;
var siblingNames = ["Michael", "Marielle", "Gabriella", "Julianna", "John", "Anna"]

console.log("My name is " + firstName + " " + lastName + "."); //Outputting to console.log my name.

var age = yearCurrent - yearBirth; //Calculating my age from the current yearn and my year of birth.

console.log("I was born in " + placeBirth + " in " + yearBirth + " and I will be " + age + " this " + monthBirth + "."); // Outputting birth location, year of birth, age and month of birth.

console.log("It is " + genderMale + " that I am male."); //Outputting gender.

console.log("I am " + relationshipStatus + " and it is " + parent + " that I am a parent and " + grandparent + " that I am a grandparent."); //Outputting relationship statuses.

console.log("I have " + numSiblings + "."); //Outputting number of siblings.