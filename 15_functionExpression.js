/*
Another syntax for creating functions is known as a "Function Expression." 
This syntax enables the creation of a new function within the context of any expression.


In a Function Expression, the creation of the function occurs 
within the context of the assignment expression, typically on the 
right side of the '=' operator. Notably, in such expressions, there's 
no identifier immediately following the function keyword. Omitting a 
name in this context is permissible for Function Expressions.
*/

function sampleOne() {
  console.log("Sample 1");
}

// Function expression style

let sampleTwo = function () {
  console.log("sample 2");
};

sampleTwo();

function greet() {
  // (1) Define a function
  console.log("Sayonara!");
}

let sayHello = greet; // (2) Assign the function to another variable

sayHello(); // Sayonara    // (3) Invoke the function through the new variable
greet(); // Sayonara    // The original function can still be called directly

/*

An IIFE, which stands for Immediately Invoked Function Expression, 
is a JavaScript design pattern that allows a function to be executed
immediately after it's defined. It's a way to encapsulate code within a 
function scope and execute it immediately without needing to explicitly 
call the function later.

Here's the basic syntax of an IIFE:
(function() {
    // code here
})();

*/

(function () {
  console.log("This is an IIFE");
})();
