/**
 * Created by Simeon on 3/10/2015.
 */

// Simeon Smith
// Scalable Data Infrastructures
// C201503 Term
// Expression Activity

var yearBorn = 1988;
var currentYear = new Date().getFullYear();
var age = currentYear - yearBorn;

console.log("Year of Birth: " + yearBorn + ", Current Year: " + currentYear + ", Age: " + age);

//Modulo Example: Helpful for even or odd.

var remainder = 43%2;

console.log(remainder);

//The are of a triangle is half the width times the height.

var width = 3;
var height = 9;
var area = width * height / 2;

console.log("The area of a triangle that is " + height + " in. and " + width + " in. wide is " + area +" in.");


//Order of operations - PEMDAS.

var quiz1 = 95,
    quiz2 = 100,
    quiz3 = 80,
    quiz4 = 75;

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;

console.log(average);

var length2 = 8,
    height2 = 4,
    perimeter = (length2 + height2) * 2;

console.log(perimeter);

//Arrays in an expression.

var appleBins = [234, 567, 883, 556, 201],
    total = appleBins[0] + appleBins[1] + appleBins[2] + appleBins[3] + appleBins[4];

console.log(total);

//Concatenating strings.

var firstName = "Simeon",
    lastName = "Smith",
    fullName = firstName + " " + lastName;

console.log(fullName);

var a = "6",
    b = "7",
    result = a + b; //Results in 67 instead of 13.

console.log(result);

//Casting - Turning strings into numbers.

var stringVar = "6",
    result = 7 + Number(stringVar);

console.log(result);

var phoneAreaCode = 207,
    phoneFirst3 = 619,
    phoneLast4 = 1880;

var phoneNo = "(" + String(phoneAreaCode) + ") " + String(phoneFirst3) + "-" + String(phoneLast4);

console.log(phoneNo);

//Assignment Operators

var w = 3;
    w = w + 4;
    w += 4; //Does the same as above.
    w *= 4; //Multiplies by number.
    w /= 4; //Divides by number.
    w -= 4; //Subtracts number.
    w ++ ; //Adds one.
    w -- ; //Subtracts one.


console.log(w);
