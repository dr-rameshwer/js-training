/*
Loops in js

// while loop

while (cond) {

    // loop body

}
*/

let x = 5;
while (x > 0) {
  console.log(x);
  x--;
}

let y = 5;
while (y) {
  // when y comes down to 0, the condition becomes false
  console.log(y);
  y--;
}

// If the loop body consists of a single statement,
//we can omit the curly braces {…}.

/*
do {
  // body of loop
} while (condition);
*/

let count = 10;
do {
  console.log(count);
  count--;
} while (count > 0);

/*
for (initialization; condition; expression) {
  // code block to be executed
}

*/

for (let k = 5; k >= 0; k--) {
  // displays 5, 4, 3, 2, 1, 0
  console.log(k);
}

// At any point during execution, we can terminate the loop using the special directive 'break'.

/*
let sum = 0;
let value;

do {
  value = +prompt("Enter a number", '');
  if (!value) break; // Breaks  if the input is cancel or input a NaN.
  sum += value;
} while (true);

console.log('Sum:', sum);
*/

/*
Rather than halting the entire loop, it only interrupts 
the current iteration, prompting the loop to 
commence a new one (provided the condition allows).
*/

for (let i = 0; i < 10; i++) {
  // If true, skip the remaining part of the body
  if (i % 2 === 0) continue;
  console.log(i); // 1, then 3, 5, 7, 9
}

/*
label: for () {
Loop body
}
In order to halt the process when the user cancels the input, 
a regular break after the input wouldn't suffice 
as it would only terminate the inner loop. Labels provide a solution to this problem.

The syntax break label; does not function as 
expected in JavaScript; it does not jump to the specified 
label below. However, break label; inside a labeled block (denoted by {}) does work.
*/

MERN: for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    let input = prompt(`Value at coordinates (${row},${col})`, "");
    // If an empty string or canceled, break out of both loops
    if (!input) break MERN;
    // Do something with the value...
  }
}
console.log("Done!");
