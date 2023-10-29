let recursiveCalculations = 0;
let memoizedCalculations = 0;
function fibonacciRecursive(n: number) {
  recursiveCalculations++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} //O(2^n)

function fibonacciMemoized() {
  let cache = {};
  return function fib(n: number): number {
    memoizedCalculations++;
    if (n < 2) {
      return n;
    }
    if (!cache[n]) {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
} //O(n)

let fibonacciMemo = fibonacciMemoized();
console.log(fibonacciMemo(9));
console.log(memoizedCalculations);
console.log(fibonacciRecursive(9));
console.log(recursiveCalculations);
