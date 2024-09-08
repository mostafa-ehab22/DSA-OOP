//?Google Question
//*Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//*Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//*Given an array = [2,3,4,5]:
//It should return undefined

//?Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//! Using Set => Better as i only care about keys here
function firstRecurringCharacter(input) {
  const seenBefore = new Set(); // Initialize an empty Set to track seen elements

  for (let i = 0; i < input.length; i++) {
    //* Check if the current element is already in the Set
    if (seenBefore.has(input[i])) {
      return input[i]; // If yes, return it as the first recurring character
    }

    seenBefore.add(input[i]); //* Add the current element to the Set
  }

  return undefined; // Return undefined if no recurring character is found
}

//! Using Map
function firstRecurringCharacter2(input) {
  const hashTable = new Map();

  for (let i = 0; i < input.length; i++) {
    if (hashTable.has(input[i])) {
      return input[i];
    }

    hashTable.set(input[i], true);
  }

  return undefined;
}

console.log("ANSWER SET:", firstRecurringCharacter([1, 2, 2, 4, 5, 1]));
console.log("ANSWER MAP:", firstRecurringCharacter2([3, 2, 2, 4, 5, 1]));
