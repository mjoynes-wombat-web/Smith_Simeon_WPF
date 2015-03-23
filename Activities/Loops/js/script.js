/*
Simeon Smith
Scalable Data Infrastructures
C201503 Term
Loops Activity
March 23, 2013
 */


/*WHILE LOOP*/

var b = 15;

while (b > 0){ //While b is greater than 0 ouptut string and subtract one.
    console.log(b + " bottles of bear on the wall.");
    b--;
}//Only run if condition is true.

/*DO WHILE LOOP*/

var c = 10;

do{
    console.log(c + " kegs on the wall.");
    c--;
}while(c>0); //Still run the first time even if condition is false.

/*FOR LOOP*/

for (var i = 20; i > 0; i--){ //Shorthand of the while loop.
    console.log(i + " bugs on the wall.");
}