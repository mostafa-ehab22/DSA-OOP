class Node {
  constructor(nodeValue) {
    this.value = nodeValue;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  ////////////* Initiating linked list //////////
  //! Initiating head only
  constructor(nodeValue) {
    this.head = { value: nodeValue, next: null, prev: null };

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
    newNode.prev = this.tail; //* DOUBLY-LINKED

    //! New node becomes the tail
    this.tail = newNode;

    //! Update length
    this.length++;

    return this; // return linked list
  }

  prepend(nodeValue) {
    const newNode = { value: nodeValue, next: null };

    //! Update New node pointer
    newNode.next = this.head;
    this.head.prev = newNode; //* DOUBLY-LINKED
    //! Update head
    this.head = newNode;
    //! Update length
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    //! Go through list until reaching wanted index
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, nodeValue) {
    //? Check params: If insertion index greater than length => Add to list ending
    if (index >= this.length) {
      return this.append();
    }

    const newNode = new Node(nodeValue);

    //* Leader --> Node --> Ending
    //! Getting leader node: precedes actual index of inserted node
    const leader = this.traverseToIndex(index - 1);

    //! Getting ending node coming after leader
    const ending = leader.next;

    //! Inserting new node
    leader.next = newNode;
    newNode.next = ending;
    newNode.prev = leader; //* DOUBLY-LINKED
    ending.prev = newNode; //* DOUBLY-LINKED

    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    const ending = nodeToRemove.next;

    //! Remove pointer to nodeToRemove
    // I don't have to manually delete it as JS Garbage collection will remove it
    leader.next = ending;
    ending.prev = leader; //* DOUBLY-LINKED

    this.length--;
    return this.printList();
  }

  printList() {
    const array = [];
    // Start from head
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      // Go to next node
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const mostafaDoubly = new DoublyLinkedList(10);

// Appending
console.log("\nAppending");
mostafaDoubly.append(5);
mostafaDoubly.printList();
mostafaDoubly.append(44);
mostafaDoubly.printList();

// Prepending
console.log("\nPrepending");
mostafaDoubly.prepend(33);
mostafaDoubly.printList();
mostafaDoubly.prepend(7);
mostafaDoubly.printList();

// Inserting
console.log("\nInserting");
mostafaDoubly.insert(2, "SUIIII");
mostafaDoubly.insert(3, "CR7");
