/* The directive looks like a string: "use strict" or 'use strict'.
When it is located at the top of a script, 
the whole script works the “modern” way. */

"use strict";

//below line will generate an error as we are running js using node not using browser

// alert("hello world");

// VARIABLES *********************
console.log("***************** Variables Related  ********************");

/* Variable declaration using var or let

A variable is a “named storage” for data. 
We can use variables to store goodies, visitors, and other data.

Variable name must contain only letters, 
digits, or the symbols $ and _ and the 
first character must not be a digit.

*/

let message;

message = "Hi welcome to SDC @ LKCTC";

console.log(message);

let user = "Rahul",
  age = 25,
  notice = "Hello";

let studentClass = "MCA";

var studentName = "Rameshwer";

// Below is the example of creating variable without use of var or let
// in case of 'use strict' mode we cant use following bad way of declaring a variable
//This way is a bad way and would cause an error in strict mode:

// studentAddress = "Jalandhar";

// its preferable to use let instead of var due to problem of the block scope of the variable

studentName = "Shyam";

console.table([studentName, studentClass]);

//CONSTANTS

console.log("***************** Constants Related  ********************");

// Constant declaration using const keyword

// Constant can not be reassigned a new value.

const studentRollNumber = 101;

const BLOCK_D = "D";

// in the below line we are trying to assign a new value to cost type but it will generate the error

// studentRollNumber = 102;

console.log(BLOCK_D);

//Good convention to declare constants with CAPITAL letters like below

const PI = 3.14;

console.log(PI);

/*
Some Notes
let – represents a contemporary method of declaring variables.
var – signifies a traditional approach to variable declaration. It is generally avoided in modern coding practices, but we'll explore nuanced distinctions from let in the section titled "The Legacy of 'var,' just in case such nuances become relevant."
const – mirrors let in its declaration style, but with the added constraint that the 

*/
