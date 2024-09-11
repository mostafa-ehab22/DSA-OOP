class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/*
  Stack (from top to bottom):
    Top --> [5] -> [4] -> [3] -> [2] -> [1] -> null
*/

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = this.bottom = newNode;
    } else {
      this.top.next = newNode;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop() {}
}
