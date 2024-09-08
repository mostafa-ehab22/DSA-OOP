class LinkedList {
  //! Initiating linked list => Initiating head only
  constructor(headValue) {
    this.head = {
      value: headValue,
      next: null,
    };
    //! Tail equals head as list is empty @ initiation
    this.tail = this.head;
  }
}

//* Create Linked List: 10 --> 25 --> 300
const mostafaLinkedList = new LinkedList(10);
