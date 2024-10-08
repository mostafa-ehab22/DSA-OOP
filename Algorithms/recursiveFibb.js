// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Pattern of the sequence is that each value is the sum of the 2 previous values
// EX:   N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(position) {
  // Inital conditions
  let arr = [0, 1];

  // From index 2 to the specified position
  for (let i = 2; i <= position; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[position];
}

function fibonacciRecursive(position) {
  // Base cases => 0 & 1 initial conditions for fibbonacci
  // position=0 ==> 0
  // position=1 ==> 1
  if (position < 2) {
    return position;
  }

  return fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
