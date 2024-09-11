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
      //! Hold Old top item
      holdingPointer = this.top;

      //! Add new item & point to old item
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    //! ONLY 1 Item left in stack
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    //* const holdingPointer = this.top           ==> USED to return popped item
    this.top = this.top.next;

    this.length--;
    return this;

    //* return holdingPointer
  }
}
