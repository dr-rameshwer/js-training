/*
Functions in programming are essential tools that 
enable the reuse of code by encapsulating a set of 
instructions under a single name. They allow the execution of a 
specific action or set of actions repeatedly without the need for 
redundancy. In addition to built-in functions like alert, 
prompt, and confirm, developers can create custom functions 
tailored to their specific requirements. These functions 
act as modular building blocks, promoting code organization, 
readability, and maintainability. By defining functions, programmers 
can streamline their codebase, 
improve efficiency, and enhance the overall structure of their programs.

In JavaScript, you can declare a function using the function 
keyword followed by the function name and a pair of parentheses containing optional parameters. 

function functionName(parameter1, parameter2, ...) {
    // function body
    // code to be executed
}


function name(parameter1, parameter2, ... parameterN) {
 // body
}

call to function
functionName()
*/

function helloWorld(fName) {
  console.log("Welcome" + fName);
}

helloWorld("Ram");

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");

function showMessage() {
  let message = "Hello, Welcome to JavaScript!"; // local variable

  console.log(message);
}

showMessage(); // Hello, Welcome to JavaScript!

// console.log(message);
// Above will result in an error because `message` is not accessible outside the function.

//Function can access outer variable

let userName = "RAM";

function showName() {
  let message = "Hello, " + userName;
  console.log(message);
}

showName(); // This will log "Hello, RAM" to the console.

//The function has full access to the outer variable and can also modify it.

//Outer variable must be used only when there is no local variable

/*
If a variable with the same name is declared inside the function, 
it takes precedence over the outer variable. In the code below, 
the function uses the locally declared userName variable, 
disregarding the outer variable with the same name.
*/

let userName1 = "RAM";

function showName() {
  let userName1 = "Shyam";
  let message = "Hello, " + userName1;
  console.log(message);
}

console.log(userName1);

/* 
Global variables are accessible from any function within the program, 
unless they are overridden by local variables within those functions.
Minimizing the use of global variables is considered a best practice 
in modern programming. Instead, variables are typically scoped within their 
respective functions or blocks. While global variables should be used sparingly, 
they can still be beneficial for storing project-wide data when necessary.

*/

// Parameters are used to pass data to the functions

let num1 = 2;
let num2 = 4;

function add(x, y) {
  x = x + y;
  console.log(x);
}

add(num1, num2);

/*
When a function is invoked without 
providing an argument for a parameter, 
the corresponding parameter value within 
the function becomes undefined.
*/

add(num1); // === add(num1, undefined)

// Modern way of defining default params

//Using ||
function myNameIs(name) {
  name = name || "No Name";
  console.log(name);
}

myNameIs();
myNameIs("RamJi");
//Using nullish

/*
Modern JavaScript engines incorporate the nullish coalescing operator ??, 
which is preferable in cases where many falsy values, including 0, should be treated as "normal".
*/

function accountNumber(acct) {
  acct = acct ?? "NoAccount";
  console.log(acct);
}

accountNumber(0);

accountNumber(null);

accountNumber(undefined);

accountNumber(1234);

// return statement in functions

// Function can return to caller

function returnStatement() {
  let msg = "Ramesh";
  return msg;
}
let returnVariable = returnStatement();

console.log(returnVariable);
/*


It is feasible to utilize 
the "return" statement without specifying a value.

If a function does not return a value, 
it is the same as if it returns undefined

This action results in the immediate termination of the function
NOTE

A function should precisely perform the action implied by its name, without exceeding its intended scope.

Two distinct actions typically warrant separate functions, even if they are commonly executed together. 
In such cases, a third function can be created to orchestrate the execution of the two independent functions.
*/

// Example 1: With else statement
function checkAgeWithElse(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log("Did your parents allow you?");
  }
}

// Example 2: Without else statement
function checkAgeWithoutElse(age) {
  if (age > 18) {
    return true;
  }
  return console.log("Did your parents allow you?");
}

// Function to generate a random integer within a
//specific range [min, max]
function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up to the nearest integer
  max = Math.floor(max); // Round down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
var min = 1; // Minimum value
var max = 100; // Maximum value
var randomNumber = getRandomInt(min, max); // Generate a random integer between min and max (inclusive)

console.log(randomNumber); // Output the random number
