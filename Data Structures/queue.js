/*
  !  FIFO
  ?  Queue (from top to bottom) => LINKED LIST APPENDING
  ?  Must use Linked list to create Queue "NOT ARRAY" => Array removing is O(n) 

  *  (((First: REMOVING)))     [5] -> [4] -> [3] -> [2] -> [1] -> newNode     (((Last: ADDING)))
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first ? this.first.value : null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.first === this.last) {
      return null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;

    if (this.length === 1) {
      this.last = null; //! RESETTING first & last to null
    }

    this.length--;
    return holdingPointer.value;
  }
}

const myQueue = new Queue();

console.log(myQueue.enqueue("Mostafa"));
console.log(myQueue.enqueue("Ehab"));
console.log(myQueue.enqueue("Yehia"));

console.log("DEQUEUED:", myQueue.dequeue());
console.log("DEQUEUED:", myQueue.dequeue());

console.log(myQueue.peek());
