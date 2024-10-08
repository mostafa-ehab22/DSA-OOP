/*
 *   1. Base Case => When to stop
 *   2. Recursive Case => When to recurse
 *   3. Usually 2 returns => return recursive function to bubble up result (Not return undefined)
 */

//! ANYTHING Done Recursively => CAN be done Iteratively (Loop)
//? Enhance DRY & Readability
//? BUT Large Memory footprint (stack overflow)

//! Some languages have Tail Call Optimization => Allows Recursion without increasing callStack
//* BEST USE CASES:
// 1. Using tree / Converting sth into tree
// 2. Divide & Conquer using Recursion (BFS + DFS)

let counter = 0;

function inception() {
  // RECURSIVE CASE:  < 3
  // BASE CASE:  > 3
  if (counter > 3) {
    return "Done";
  }

  counter++;
  return inception(); //Without return here => UNDEFINED
}
