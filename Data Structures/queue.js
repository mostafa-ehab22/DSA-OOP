/*
  !  FIFO
  ?  Queue (from top to bottom) => LINKED LIST APPENDING

  *  (((First: REMOVING)))     [5] -> [4] -> [3] -> [2] -> [1] -> newNode     (((Last: ADDING)))
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {}
  enqueue() {}
  dequeue() {}
}

const myQueue = new Queue();
