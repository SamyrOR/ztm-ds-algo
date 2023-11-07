// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n: number) {
  //code here;
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }

  let fibonacci = 1;
  let prev = 0;
  let prev2 = 1;
  for (let i = 1; i < n; i++) {
    fibonacci = prev + prev2;
    prev = prev2;
    prev2 = fibonacci;
  }
  return fibonacci;
} //O(n)
console.log(fibonacciIterative(3));

function fibonacciRecursive(n: number) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  //code here;
} //O(2^n)

console.log(fibonacciRecursive(6));
