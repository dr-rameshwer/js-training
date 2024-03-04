function memoizedFunction() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache:", n);
      return cache[n];
    } else {
      console.log("Calculating result:", n);
      const result = n + 10;
      cache[n] = result;
      return result;
    }
  };
}
const memoized = memoizedFunction();
console.log(memoized(5)); // Output: Calculating result: 5, 15
console.log(memoized(5)); // Output: Fetching from cache: 5, 15
console.log(memoized(15)); // Output: Calculating result: 15, 25
console.log(memoized(15)); // Output: Fetching from cache: 15, 25
