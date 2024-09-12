class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

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
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const poppedItem = this.top;

    this.top = this.top.next;
    this.length--;

    return poppedItem;
  }
}
