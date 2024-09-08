//? Create Linked List: 10 --> 25 --> 300
//? Instead of repeating    const newNode = { value: nodeValue, next: null }; ===> Create Node CLass

class Node {
  constructor(nodeValue) {
    this.value = nodeValue;
    this.next = null;
  }
}
class LinkedList {
  ////////////* Initiating linked list //////////
  //! Initiating head only
  constructor(headValue) {
    this.head = { value: headValue, next: null };

    //! Tail equals head as list is empty @ initiation
    this.tail = this.head;

    //! Only head exists @ initiation
    this.length = 1;
  }

  ////////////* Methods /////////////
  append(nodeValue) {
    const newNode = new Node(nodeValue);

    //! Change pointer of tail: null => New Node
    //? Must update pointer of tail before changing tail to be new node
    this.tail.next = newNode;

    //! New node becomes the tail
    this.tail = newNode;

    //! Update length
    this.length++;

    return this; // return linked list
  }

  prepend(nodeValue) {
    const newNode = new Node(nodeValue);

    //! Update New node pointer
    this.newNode.next = this.head;
    //! Update head
    this.head = newNode;
    //! Update length
    this.length++;

    return this;
  }
}

const mostafaLinkedList = new LinkedList(10);
console.log("Initialization:\n", mostafaLinkedList);

mostafaLinkedList.append(25);
mostafaLinkedList.append(300);
console.log("\nAppending Nodes:\n", mostafaLinkedList);

mostafaLinkedList.prepend("Hello");
mostafaLinkedList.prepend("World");
console.log("\nPrepending Nodes:\n", mostafaLinkedList);
