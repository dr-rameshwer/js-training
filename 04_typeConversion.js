/*
In many cases, operators and functions inherently perform conversions on 
the values provided to them to ensure compatibility with the appropriate data types.
*/

console.log("***************** Type Conversions ********************");
//String conversion happens when we need the string form of a value.

let typeBool = true;
console.log(typeof typeBool);
newType = String(typeBool);
typeBool = String(typeBool);
console.log(typeof typeBool);

// Number type conversion.
//Numeric conversion in mathematical functions and expressions occurs automatically.
let num1 = "6";
let num2 = "2";

console.log(num1 / num2); // it will result in 3 as automatic type conversion.
//Number(var) explicit type conversion will be required when we want to convert explicitly.
let num3 = "5555";
console.log(typeof num3);
num3 = Number(num3);
console.log(typeof num3);

// If the string is not a valid number, the outcome of such a conversion is NaN (Not a Number).

let string1 = "Hello World";
string1 = Number(string1);
console.log(string1);
console.log(typeof string1);

//Some examples
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(" 123 ")); // 123
console.log(Number("123z")); // NaN

/*
Values that are typically considered "empty," such as 0, an empty string, null,
undefined, and NaN, evaluate to false. Conversely, other values evaluate to true.
*/

console.log(Boolean("hello")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
