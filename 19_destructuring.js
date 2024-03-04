/*
Destructuring assignment in JavaScript is a powerful feature 
that allows you to extract values 
from arrays or properties from objects into distinct variables. 
It provides a concise syntax to unpack values 
from arrays or properties from objects into variables.
*/

const numbers = [1, 2, 3, 4, 5];
const [a, b, , , c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

const person = {
  name: "John",
  age: 30,
  country: "USA",
};

const { name, age } = person;
console.log(name);
console.log(age);

const { name: personName, age: personAge } = person;

console.log(personName);
console.log(personAge);

console.log(name); // 'John'
console.log(age); // 30

const user = {
  name: "Alice",
  age: 25,
  social: {
    twitter: "@alice",
    facebook: "alice.profile",
  },
};

// const {
//   name,
//   age,
//   social: { twitter },
// } = user;

// console.log(name); // 'Alice'
// console.log(age); // 25
// console.log(twitter); // '@alice'

const numbersDemo = [1, 2, 3, 4, 5];
const [first, two, ...others] = numbersDemo;

console.log(first); // 1
console.log(two); // 2
console.log(others); // [ 3, 4, 5]
