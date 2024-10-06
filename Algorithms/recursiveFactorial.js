// Write 2 functions => Find factorial of number
// 1. Recursive
// 2. Use for loop

function findFactorialRecursive(number) {
  // 2! = 2*1 => More efficient
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
