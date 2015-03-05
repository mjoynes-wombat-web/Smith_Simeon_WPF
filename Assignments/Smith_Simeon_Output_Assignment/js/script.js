/**
 * Created by Simeon on 3/4/2015.
 */

// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Output Assignment


var firstName = "Simeon"; //Assigning my first name as a string.
var lastName = "Smith"; //Assigning my last name as a string.
var yearBirth = 1988; //Assigning my birth year as a number.
var monthBirth = "November"; //Assigning my birth month as a string.
var yearCurrent = new Date().getFullYear(); //Calculating the current year and setting it as a number.
var placeBirth = "Anchorage, Alaska"; //Assigning my birth location as a string.
var genderMale = true; //Assigning a boolean value to my gender.
var relationshipStatus = "married"; //Assigning my relationship status as a string.
var parent = true; //Assigning a boolean value to my parental status.
var grandparent = false; //Assigning a boolean value to my grandparental status.
var numSiblings = 6; //Assigning how many siblings I have as a number.
var siblingNames = ["Michael", "Marielle", "Gabriella", "Julianna", "John", "Anna"]; //Assigning my sibling names as an array.

console.log("My name is " + firstName + " " + lastName + "."); //Outputting name to console.log my name.

var age = yearCurrent - yearBirth; //Calculating my age from the current yearn and my year of birth and assigning it as a number.

console.log("I was born in " + placeBirth + " in " + yearBirth + " and I will be " + age + " this " + monthBirth + "."); // Outputting birth location, year of birth, age and month of birth.

console.log("It is " + genderMale + " that I am male."); //Outputting gender.

console.log("I am " + relationshipStatus + " and it is " + parent + " that I am a parent and " + grandparent + " that I am a grandparent."); //Outputting relationship statuses.

console.log("I have " + numSiblings + " siblings."); //Outputting number of siblings.

console.log(siblingNames[0] + " is my older brother."); //Output older sibling's name.

console.log("All my other siblings are younger; their names are " + siblingNames[1] + ", " + siblingNames[2] + ", " + siblingNames[3] + ", " + siblingNames[4] + ", and " + siblingNames[5] + "."); //Output younger sibling's names.

console.log("My sister " + siblingNames[1] + " is a nun."); //Identify sibling 2 as a nun.

siblingNames[1] = "Fevronia"; //Changing sibling 2's name.

console.log("When she became and nun her name changed to " + siblingNames[1] + "."); //Outputting sibling 2's name change.

