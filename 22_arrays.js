const array1 = [1, 2, 3, 4, 5];

//array1.push(6);

console.log(array1);

let array2 = new Array();

array2.push(1, 2, 3, 4, 5);

console.log(array2);

console.log(array1[0]);

console.log(`length of array is ${array1.length}`);

array2.pop();

console.log(array2);

console.log("nn", array1);
array1.shift(); //Extracts the first element of the array and returns it:
console.log(array1.shift());

array1.unshift(1000); //Adds an element to the beginning of the array:

console.log(array1);

//Arrays have their own implementation of
//toString method that returns a comma-separated list of elements.

console.log(array1.toString());

array1.indexOf(3); // Returns the index of the element in an array:

console.log(array1);

array1.includes(2); // Checks whether an element exists in an array:

console.log(array1);

//arr.splice(start[, deleteCount, elem1, ..., elemN])

/*

This function modifies the array arr starting from the index specified 
by start. It removes deleteCount elements from that position 
and then inserts elem1 through elemN at their place. Finally, 
it returns an array containing the removed elements.
*/

array1.splice(1, 2);
// Removes an element at the specified index and returns the array of removed elements.

/*
The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Here's what each parameter in splice() represents:

The first parameter, 1, indicates the index at which to start modifying the array.
The second parameter, 2, specifies the number of elements to remove starting from the index specified by the first parameter.
Therefore, array1.splice(1, 2); removes two elements from array1, starting from the index 1.
*/

var array = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
array.splice(1, 2);
// array is now [1, 4, 5]

// Remove 1 element starting from index 0, and insert 'a' and 'b'
array.splice(0, 1, "a", "b");
// array is now ['a', 'b', 4, 5]

array1.splice(1, 2, 4, 6); // Inserts an element at the specified index:
console.log(`splice is ${array1}`);

console.log(array1);

//arr.slice([start], [end])

array1.slice(2, 4); // Returns a shallow copy of a portion of an array: start to end (not including end)

// concat() used to concat another array or values in one array

//arr.concat(arg1, arg2...)
console.log(array1);

console.log(array1.concat(7, 8, 9, [10, 11]));

// foEach() used to process each element of array

/*
Syntax:
array1.forEach((value, index, array) => {
*/

["ajay", "ramji", "kuldeep"].forEach((item, index, arr) => {
  console.log("for each", arr[index], index, item);
});

//Searing i array using indexOf, lastIndexOf, includes

// indexOf : This method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3); // Returns 2

//lastIndexOf: This method returns the last index at which a given element can be found in the array, or -1 if it is not present.
const arrayS = [1, 2, 3, 4, 5, 3];
const lastIndex = arrayS.lastIndexOf(3); // Returns 5

//includes : This method determines whether an array includes a certain value among its elements, returning true or false as appropriate.
const arrayI = [1, 2, 3, 4, 5];
const isIncluded = arrayI.includes(3); // Returns true

// find, findIndex

/*

find() method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

const foundElement = array.find((element) => {
  // return true if element satisfies condition
});

findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

const foundIndex = array.findIndex((element) => {
  // return true if element satisfies condition
});



*/

array1.find((x) => x > 5); // Returns the first element in an array that passes a test:

console.log(array1);

exampleArray = [20, 30, 40, 50, 60];
const foundElement1 = exampleArray.find((item) => item > 30);
console.log("foundElement1", foundElement1);

array1.findIndex((x) => x > 5); // Returns the index of the first element in an array that passes a test:

console.log(array1);

const foundIndexElement1 = exampleArray.findIndex((item) => item > 30);
console.log("foundIndex", foundIndexElement1);

let foundElement = [1, 5, 6, 8, 9].find((element) => element > 5); // Returns 6

console.log(foundElement);

let foundIndex = [1, 3, 9, 88].findIndex((element) => element > 2);

console.log(foundIndex);

let users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Shyam" },
  { id: 3, name: "Rohan" },
];
const foundRohan = users.find((item) => item.name === "Rohan");
console.log("foundRohan", foundRohan);

let userFound = users.find((item) => item.name.toLowerCase() === "shyam");

console.log("userFound", userFound);

//filter filter returns an array of all matching elements:

/*

In JavaScript, the filter() method is used to create a new array with 
all elements that pass the test implemented by the provided function. 
It does not modify the original array but returns a new array containing 
only the elements that satisfy the condition.

const newArray = array.arr.filter(function(item, index, array) {}

*/

array1.filter((x) => x > 5); // Returns an array of all the elements that pass a test:

let usersNew = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Rohan" },
];

let newArray = usersNew.filter((item) => item.name === "Ram");

console.log("newArray", newArray);
array1.fill(88, 1, 5); // Fills an array with a specified value from a start index to an end index:

console.log("array1", array1);

array1.sort(); // Sorts an array in alphabetical order:

console.log("sort", array1);

array1.reverse(); // Reverses an array:

console.log("reverse", array1);

console.log(array1);

// The slice() method in JavaScript returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

console.log("slice is", array1.slice(1, 2));

console.log(array1);

const newarray = array1.map((x) => x + 50); // Changes each element in an array to a new value based on the return value of a provided function:

console.log("map", newarray);

array1.reduce((acc, cur) => acc + cur, 0);
// Combines all the elements of an array to a single value:

console.log(array1);

array1.reduceRight((acc, cur) => acc + cur, 0); // Combines all the elements of an array to a single value from right to left:

console.log(array1);

array1.some((x) => x > 5); // Checks if at least one element in an array passes a test:

console.log(array1);

array1.every((x) => x > 5); // Checks if every element in an array passes a test:

console.log(array1);

array1.every((x) => x === 3); // Checks if every element in an array passes a test:

console.log(array1);

array1.forEach((x) => console.log(x)); // Calls a function for each element in an array:

console.log(array1);

array1.forEach((x) => console.log(x)); // Calls a function for each element in an array:

console.log(array1);
