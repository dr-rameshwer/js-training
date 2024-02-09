/*
In JavaScript, you can generate random numbers using 
the built-in Math.random() function. This function returns a floating-point, 
pseudo-random number in the range from 0 (inclusive) to 1 (exclusive).
*/

let randomNumber = Math.random();
console.log(randomNumber);

let randomNumber0To10 = Math.floor(Math.random() * 11);
console.log(randomNumber0To10); // Random number between 0 and 10 (inclusive)

let randomNumber1To10 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber1To10); // Random number between 1 and 10 (inclusive)
