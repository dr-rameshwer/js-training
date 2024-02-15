// let func = (param, param2, ...paramN) => expression;

let add = (x, y) => x + y;

console.log(add(3, 5)); // Outputs: 8

// calculate square

let square = (x) => (x = x * x);
console.log(square(5));

// we need to ass {} in case of multiline => function

let minus = (a, b) => {
  console.log("Answer is");
  a = a - b;
  console.log(a);
};

minus(10, 8);

let multiply = (u, v) => {
  console.log("Answer is");
  u = u * v;
  return u;
};
let answer = multiply(10, 8);

console.log(answer);
