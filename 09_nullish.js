//Nullish operator '??'

/*
The nullish coalescing operator (??) 
provides a concise syntax to obtain the first "defined" value between two expressions. 
It returns the value of the first expression 
if it is not null or undefined; otherwise, it returns the value of the second expression.

The nullish coalescing operator (??) 
returns the first operand that is not null or undefined. 
It evaluates the operands from left to right.


*/

let city;

console.log(city ?? "Unknown");

city = "Jalandhar";

console.log(city ?? "Unknown");

//another example

let myCity = null;
let country = null;
let region = "Europe";

console.log(myCity ?? country ?? region ?? "Unknown");

// difference between nullish an OR

//The || operator returns the first truthy value.
//The ?? operator returns the first defined value

let height = 0;

console.log(height || 100); // 100 it will treat 0 as false and return 100
console.log(height ?? 100); // 0 it will consider 0 as value hence return 0
