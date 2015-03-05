/**
 * Created by Simeon on 3/4/2015.
 */

// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Output Assignment


var firstName = "Simeon "; //My first name.
var lastName = "Smith"; //My last name.
var yearBirth = 1988; //My year of birth.
var yearCurrent = new Date().getFullYear(); //Current year.
var placeBirth = "Anchorage, Alaska"; //My location of birth.
var generMale = true; //My gender.
var relationshipStatus = "married"; //My relationship status.
var parent = true; //My parental status.
var grandparent = false; //My grandparental status.

console.log("My name is " + firstName + lastName + "."); //Outputting to console.log my name.

var age = yearCurrent - yearBirth; //Calculating my age from the current yearn and my year of birth.

console.log(age); //Testing age output.
