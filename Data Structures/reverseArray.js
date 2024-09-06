function reverse(string) {
  stringArray = string.split("");
  let reversed = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversed.push(stringArray[i]);
  }

  reversedWord = reversed.join("");

  console.log(stringArray, reversedWord);
}

reverse("mostafa ehab");
