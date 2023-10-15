function findFactorialRecursive(number: number) {
  let factorial = number;
  if (number == 1) {
    return 1;
  }
  factorial = findFactorialRecursive(number - 1) * factorial;
  return factorial;
}

function findFactorialIterative(number: number) {
  let factorial = 1;
  for (let i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
