function outerFunction() {
  var outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var myFunction = outerFunction();
myFunction(); // Output: "I am from the outer function"

function counter() {
  var count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

var incrementCounter = counter();

incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3
