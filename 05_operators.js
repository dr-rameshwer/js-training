/*
An operand refers to the entities to which operators 
are applied. In the context of mathematical operations, such as multiplication, 
an operand can be seen as the values or variables involved. 
For instance, in the multiplication expression 15 * 42, 
there are two operands: the left operand is 15 and the right operand is 42. 
Occasionally, these are also referred to as "arguments."
An operator is termed unary when it operates on a single operand. 
In other words, it affects only one value or variable. 
For instance, the unary negation operator (-) reverses the sign of a number.
*/

// Mathematical operators

/*
The addition operator (+) combines two numerical values to produce their sum.
The subtraction operator (-) subtracts one numerical value from another.
The multiplication operator (*) multiplies two numerical values together.
The division operator (/) divides one numerical value by another.
The remainder operator (%) calculates the remainder when one numerical value is divided by another.
The exponentiation operator (**) raises one numerical value to the power of another.
*/

let a = 5; // binary: 0101

// + as concatenation
let fName = "Rameshwer " + "Singh";

console.log(fName);

console.log(2 + "3");

console.log("5" + 8);

console.log(2 + 7 + "2");

console.log("2" + 8 + 4);

/*

Numeric conversion using unary operator

The unary plus operator (+) in JavaScript is 
primarily used to convert its operand into a numeric value. 
When applied to a single value, 
it doesn't alter numerical values but serves 
to coerce non-numeric operands into numbers.

*/

let apples = "5";
let oranges = "7";
console.log(+apples + +oranges); // Output: 12
console.log(apples + oranges); // Output: "57"

// Assignment =

let aa = 5;
let bb = 7;

let c = 9 - (aa = bb + 2);

console.log(a); // Output: 9
console.log(c); // Output: 0

// Chaining Assignment

/*
Chaining assignment in JavaScript allows you to assign 
multiple variables in a single line, where each 
variable is assigned the same value.
it eval from right to left
*/

let p, q, r;
p = q = r = 10 + 10;

console.log(p); // Output: 20
console.log(q); // Output: 20
console.log(r); // Output: 20

// Shorthand operators like += -= *=

// Increment Decrement ++ --

/*

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

*/

let b = 3; // binary: 0011
//let a = 5; //binary:0101

// Bitwise AND (&)
console.log(a & b); // Output: 1 (binary: 0001)

// Bitwise OR (|)
console.log(a | b); // Output: 7 (binary: 0111)

// Bitwise XOR (^)
console.log(a ^ b); // Output: 6 (binary: 0110)

// Bitwise NOT (~)
console.log(~a); // Output: -6 (binary: 1111 1111 1111 1010)

// Left Shift (<<)
console.log(a << 1); // Output: 10 (binary: 1010)

// Right Shift (>>)
console.log(b >> 1); // Output: 1 (binary: 0001)

// Zero-fill Right Shift (>>>)
console.log(a >>> 1); // Output: 2 (binary: 0010)

/* Comparison operators
Greater than: a > b evaluates to true if a is greater than b.
Less than: a < b evaluates to true if a is less than b.
Greater than or equal to: a >= b evaluates to true if a is greater than or equal to b.
Less than or equal to: a <= b evaluates to true if a is less than or equal to b.
Equality: a == b performs an equality test, returning true if a is equal to b. Note that a double equality sign == is used for comparison.
Inequality: a != b evaluates to true if a is not equal to b. It is the opposite of the equality test.
In JavaScript, the === operator is called the strict equality operator. It compares two values, 
ensuring that both the value and the data type are the same. 
If both the value and the data type are identical, it returns true; otherwise, it returns false

*/

console.log(5 == "5"); // Output: true
console.log(0 == false); // Output: true

console.log(5 === "5"); // Output: false
console.log(0 === false); // Output: false

console.log(2 > 3); // Output: false (correct)
console.log(2 == 3); // Output: false (correct)
console.log(2 != 3); // Output: true (correct)
