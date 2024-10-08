function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function reverseStringRecursive(str) {
  if (str.length === 0) {
    return "";
  }

  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("yoyo master"));
console.log(reverseStringRecursive("yoyo master"));
