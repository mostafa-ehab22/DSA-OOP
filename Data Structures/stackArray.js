//*  Push | Pop | Length  ==> Already built-in arrays
//*  LIFO

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    //! Access last index of array
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();

console.log(myStack.push("FIRST"));
console.log(myStack.push("SECOND"));

console.log(myStack.peek());

console.log(myStack.pop());
