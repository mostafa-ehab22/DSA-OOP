class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/*
  ! LIFO
  Stack (from top to bottom) => LINKED LIST PREPENDING
    *TOP*     [5] -> [4] -> [3] -> [2] -> [1] -> null     *BOTTOM*
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

    //! 1st item added
    if (this.length === 0) {
      this.top = this.bottom = newNode;
    } else {
      //* Hold Old top item
      holdingPointer = this.top;

      //* Add new item & point to old item
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    //! Stack already empty
    if (this.length === 0) return null;

    //! ONLY 1 Item left in stack
    if (this.top === this.bottom) {
      this.bottom = null; // Also resets top to null
    }

    const poppedItem = this.top; // Store the top node to return it later

    this.top = this.top.next; // Move top to the next node
    this.length--;

    return poppedItem;
  }
}
