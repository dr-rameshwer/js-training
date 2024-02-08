/*

The "if" statement evaluates a condition within parentheses and, '
when the result is true, proceeds to execute a designated block of code.
*/

let age = 16;

if (age >= 18) {
  console.log("You Can VOTE");
}

/*
REMEMBER
Numeric zero, an empty string "", null, undefined, and NaN are all 
interpreted as false, and are therefore referred to as "falsy" values.

Other values are considered true and are thus referred to as "truthy".
*/

if (0) {
  console.log("In If"); //??
}

if (1) {
  console.log("In If with value 1"); //??
}

//else clause

let year = 2010;

if (year < 2020) {
  console.log("Too early...");
} else if (year > 2020) {
  console.log("Too late");
} else {
  console.log("Exactly!");
}

//use of conditional operator ?

//let done = cond ? returnWhenTrue : returnWhenFalse;

let accessGranted = age > 24 ? true : false;
console.log(accessGranted);

age = 18;

let message =
  age < 3
    ? console.log("Hi, Infant!")
    : age < 18
    ? console.log("Hello Friend!")
    : age < 100
    ? console.log("Greetings Sir Mam!")
    : console.log("What an unusual age!");

console.log(message);
