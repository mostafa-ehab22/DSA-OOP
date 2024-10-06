/*
1. Base Case => When to stop
2. Recursive Case => When to recurse
3. Usually 2 returns => return recursive function to bubble up result (Not return undefined) 
*/

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
