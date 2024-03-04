function add(x) {
  return function (y) {
    return x + y;
  };
}
// Curried function
const addTwo = add(2);
console.log(addTwo(3)); // Output: 5
