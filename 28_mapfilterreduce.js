// map: The map method creates
//a new array by calling a specified
//function on each element in the original array.
// It takes a callback function as an argument and applies
// that function to each element in the array, creating a new array with the results.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter: The filter method creates a new array
// with all elements that pass the test implemented by
// the provided function. It takes a callback function as an
// argument and returns a new array containing only the elements
// for which the callback function returns true.

const numbersEven = [1, 2, 3, 4, 5];
const evenNumbers = numbersEven.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/*
The reduce() method in JavaScript is used to reduce 
the array to a single value. It executes a provided 
callback function for each value of the array (from left to right), 
resulting in a single output value. The callback function takes four arguments:

Accumulator (accumulator): This is the accumulator 
accumulates the callback's return values. 
It is the accumulated value previously returned in the 
last invocation of the callback, or the initial value if supplied.

Current Value (currentValue): 
This is the current element being processed in the array.

Current Index (currentIndex): This is the index of the current element
 being processed in the array. It starts from index 0 if an initial 
 value is provided; otherwise, it starts from index 1.

Source Array (array): This is the array that reduce() was called upon.

The reduce() method can be particularly useful for 
tasks such as summing up the elements of an array, 
calculating averages, flattening arrays, or any operation that involves 
accumulating values.
*/

const numbersRed = [1, 2, 3, 4, 5];

const sum = numbersRed.reduce((accumulator, currentValue) => {
  console.log("acc", accumulator);
  console.log("cur", currentValue);
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

/*
The reduce() method starts with an initial value of 0.
For each element in the array, it adds the current value to the accumulator.
Finally, it returns the accumulated sum.
*/
