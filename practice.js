const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const strings = ["apple", "banana", "orange", "grape", "kiwi"];

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 17 },
  { name: "Eve", age: 22 },
];

const books = [
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { title: "You Don't Know JS", author: "Kyle Simpson" },
  { title: "Clean Code", author: "Robert C. Martin" },
];

const products = [
  { name: "Apples", price: 2.99 },
  { name: "Bananas", price: 1.99 },
  { name: "Oranges", price: 3.49 },
  { name: "Grapes", price: 4.99 },
];

const grades = [
  { student: "Alice", grade: "B" },
  { student: "Bob", grade: "A" },
  { student: "Charlie", grade: "C" },
  { student: "David", grade: "A" },
  { student: "Eve", grade: "B" },
];

let newNumberMultiplyByTwo = numbers.map((item) => Number(item) * 2);

console.log("newNumberMultiplyByTwo", newNumberMultiplyByTwo);

let stringToUpperCase = strings.map((item) => item.toUpperCase(item));

console.log("stringToUpperCase", stringToUpperCase);

let evenNumbers = numbers.filter((item) => item % 2 === 0);

console.log("even", evenNumbers);

let includesA = grades.filter((item) => item.student.includes("a"));
console.log("includesA", includesA);

let moreThan18 = people.filter((item) => item.age >= 18);
console.log("age more than 18", moreThan18);

let morethan188 = people.filter((i) => i.age > 18);

let findBook = books.find((item) => item.title === "You Don't Know JS");
console.log(findBook);

let gradeA = grades.filter((item) => item.grade === "A");
console.log(gradeA);
