/*
&& || ! ??
*/

//Logical OR (||)

//if (1 || 0)  // works just like if( true || false )
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// The logical OR operator (||) returns the first truthy value it encounters.

/*
The expression result = value1 || value2 || value3; 
evaluates its operands from left to right. 
For each operand, it converts it to a boolean. 
If the result is true, it stops and returns the original value of that operand. 
If all operands have been evaluated (i.e., all were false), 
it returns the value of the last operand.
*/

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

/*
if there are number of variables and all are optional
we can use || to check all the optional values like

*/
// Obtaining the initial truthy value from a series of variables or expressions.
let city = "";
let country = "";
let region = "Europe";

console.log(city || country || region || "Unknown");
//Short-circuit evaluation.
/*
In JavaScript, short-circuit evaluation is a behavior 
where the logical operators && (logical AND) and || (logical OR) 
do not necessarily evaluate all of their operands. 
Instead, they stop evaluating as soon as the outcome can be determined 
based on the values encountered so far. This behavior is utilized to 
optimize code execution by avoiding unnecessary evaluations.
*/

false || console.log("it will work");
true || console.log("it will not, will stop once true is there");

//Logical AND (&&)
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false
console.log(false && false); // false

// The logical AND operator (&&) finds the first falsy value.

result = value1 && value2 && value3;

/*
The logical AND operator (&&) evaluates its operands from left to right. 
For each operand, it converts it to a boolean. 
If the result is false, it stops and returns the original value of that operand. 
If all operands have been evaluated (i.e., all were truthy), it returns the last operand.
*/

console.log(0 && 2); // 0
console.log(3 && 2); // 2
console.log(3 && undefined); // undefined
console.log("hello" && false); // false

//NOTE: Precedence of AND && is higher than OR ||

// Conditional Rendering

let x = 5; // Example value of x

x > 0 && alert("Greater than zero!");

// NOT ! operator

// It returns the inverted value
console.log(!true); // false

console.log(!!true); // true
