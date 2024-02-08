"use strict";

/*

In JavaScript, every value is associated with a specific data type, such as a string or a number.

JavaScript encompasses eight fundamental data types.

undefined
null
number
bigint
string
boolean
symbol
object
*/

// NUMBER
console.log("***************** Number Datatype ********************");

let marksEnglish = 23;
marksEnglish = 25.8;

// There are different operations that can be performed on number datatype i.e. add, subtract, divide ...

//Apart from number some other possible values that number can hold are NaN, -Infinity, Infinity

console.log(1 / 0); // It will output "Infinity"

console.log("TWO" / 2); // This will result in NaN i.e. not a number

// Some more NaN examples are

console.log(NaN + 100); // NaN
console.log(300 * NaN); // NaN
console.log("not a number" / 20 - 10); // NaN

console.log(NaN ** 0); // Exception it will result to 1

/* 

If a NaN (Not-a-Number) appears within a mathematical expression, it extends its influence to the entire result. 
It's important to note that there is only one exception to this rule: NaN ** 0 evaluates to 1.

*/

// BIGINT

console.log("***************** BigInt Datatype ********************");

/* 

In JavaScript, the "number" type faces limitations when accurately 
representing integer values beyond (2**53 - 1) or below -(2**53 - 1) 
for negatives. 

*/

//Values beyond (2**53 - 1) cant be stored in normal number type.

console.log(9007199254740991 + 1); // will be = 9007199254740992
console.log(9007199254740991 + 2); // will result in = 9007199254740992

//To overcome above limitation BigInt is is added in js

//To declare a number as BigInt just add n at the end of the number like 1234567890123456789012345678901234567890n

let bigIntExample = 1234567890123456789012345678901234567890n;

console.log(bigIntExample);

/* 
Note

As of now, BigInt is compatible with Firefox, Chrome, Edge, and Safari; however, 
it is not supported in Internet Explorer.

*/

// STRING
console.log("***************** String Datatype ********************");

// A string JS is the value enclosed with in quotes
//"" or '' and special use of ``.

let fName = "Rameshwer";

let lName = "Singh";

console.log(`My name is ${fName}`);

let age = 35;

// Backticks serve as quotes with "extended functionality."
// They enable the incorporation of variables and expressions into a string,
// achieved by enclosing them within ${...}.

let introduction = `My name is ${fName} and my age is ${age + 5}`;

console.log(introduction);

console.log("***************** Boolean Datatype ********************");

// Boolean type can have only two values i.e. true false

let termsAccepted = true;

let termsRejected = false;

console.log(10 > 10); // will evaluate to false

console.log(10 === 10); // will evaluate to false

console.log("***************** Null Datatype ********************");

/*


In JavaScript, null is a primitive data type that 
represents the intentional absence of any object value. 
It is often used to signify the absence of a 
value or to indicate that a variable has no assigned value

*/

let subject = null;

console.log(subject);

console.log("***************** Undefined Datatype ********************");

//The term "undefined" in JavaScript signifies that a value has not been assigned.
// When a variable is declared without an assigned value, it defaults to being undefined.

let myAge;
console.log(myAge);

console.log("***************** Object Datatype ********************");

/*
Objects are distinguished from other types as "primitive"
 because their values have the ability to encompass more than just a single element, 
 such as a string or a number. Unlike other types that can only hold individual values, 
objects serve as containers for organizing and managing collections of data and more intricate entities.
*/

let studentDetails = {
  name: "Ram",
  class: "B.Tech",
  email: "ram@sham.com",
  age: 22,
};

console.log(studentDetails);

console.log("***************** Symbol Datatype ********************");
/*

In JavaScript, the Symbol type is a primitive data type introduced in ECMAScript 6 (ES6). 
Symbols are unique and immutable values that can be used as identifiers for object properties. 
They are often employed to create private or hidden properties within objects and to avoid naming conflicts.
Symbols are created using the Symbol() function, and each symbol is guaranteed to be unique.
 Here's a simple example:

*/

// Creating a symbol
const mySymbol = Symbol();

// Symbols can also have a description (optional)
const namedSymbol = Symbol("myDescription");

// Using symbols as property keys
const obj = {};
obj[mySymbol] = "Hello, Symbol!";
obj[namedSymbol] = "Symbol with description";

console.log(obj[mySymbol]); // Output: Hello, Symbol!
console.log(obj[namedSymbol]); // Output: Symbol with description

console.log("***************** typeof Operator ********************");

/* 
The typeof operator is employed to determine the data type stored in a variable. 
Typically written as typeof x, it can also be expressed as typeof(x). 
The operator yields a string indicating the type of the variable, such as "string." However, 
when applied to a null value, it incorrectly returns "object"; 
this is considered a language flaw, as null is not actually an object.
*/

let variableA; // undefined variable

console.log(typeof variableA);
// Output: "undefined"
// Explanation: The typeof operator returns "undefined" for an uninitialized variable.

let numberB = 42; // a number

console.log(typeof numberB);
// Output: "number"
// Explanation: The typeof operator returns "number" for a numeric value.

let bigIntC = 123n; // a BigInt

console.log(typeof bigIntC);
// Output: "bigint"
// Explanation: The typeof operator returns "bigint" for a BigInt value.

let booleanD = false; // a boolean

console.log(typeof booleanD);
// Output: "boolean"
// Explanation: The typeof operator returns "boolean" for a boolean value.

let stringE = "bar"; // a string

console.log(typeof stringE);
// Output: "string"
// Explanation: The typeof operator returns "string" for a string value.

let symbolF = Symbol("key"); // a symbol

console.log(typeof symbolF);
// Output: "symbol"
// Explanation: The typeof operator returns "symbol" for a symbol value.

let objectG = { key: "value" }; // an object

console.log(typeof objectG);
// Output: "object"
// Explanation: The typeof operator returns "object" for an object.

let functionH = function () {
  alert("Hello!");
}; // a function

console.log(typeof functionH);
// Output: "function"
// Explanation: The typeof operator returns "function" for a function.
