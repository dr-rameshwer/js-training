/*

Hoisting is a JavaScript mechanism where variables and 
function declarations are moved to the top of their containing scope 
during the compilation phase. This means that regardless of where variables
and functions are declared within a scope, 
they are moved to the top of their scope by the JavaScript engine.
However, it's important to note that only the declarations are hoisted, not the initializations
*/

console.log(x); // undefined
var x = 5;
console.log(x); // 5

/*
console.log(x) appears before var x = 5;, it doesn't throw an error. Instead, it prints
undefined because the declaration var x; is hoisted to 
the top of the scope, and it's automatically initialized with undefined.
*/

sayHello(); // "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}

/*
Above will work, because the function declaration is hoisted 
to the top of its scope, allowing it to be called before 
its actual declaration in the code.
*/

/*

sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};

the variable sayHi is hoisted, 
but its assignment to a function isn't, so when we try to
call it before the assignment, it throws a TypeError


*/
