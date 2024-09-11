function reverse(string) {
  //check input
  if (typeof string !== "string" || string.length == 0) return "Try again🥺";

  let reversed = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i]);
  }

  const reversedWord = reversed.join("");
  console.log(reversedWord);
}

//! Using JS methods
function reverseSimplified(string) {
  //reverse method called on arrays ONLY
  reversedWord = [...string].reverse().join("");

  console.log(reversedWord);
}

//! Arrow function
const reverseArrow = (str) => console.log(str.split("").reverse().join(""));

reverse("Mostafa Ehab");
reverseSimplified("Engineer");
reverseArrow("Messi");
