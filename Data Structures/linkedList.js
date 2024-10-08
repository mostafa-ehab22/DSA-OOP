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
  constructor(nodeValue) {
    this.head = { value: nodeValue, next: null };

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
    const newNode = { value: nodeValue, next: null };

    //! Update New node pointer
    newNode.next = this.head;
    //! Update head
    this.head = newNode;
    //! Update length
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

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

    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    const ending = nodeToRemove.next;

    //! Remove pointer to nodeToRemove
    // Don't have to manually delete it as JS Garbage collection will remove it
    leader.next = ending;

    this.length--;
    return this.printList();
  }

  reverse() {
    // CHECK: Empty OR Only 1 element
    if (!this.head || !this.head.next) {
      return this.head;
    }

    let first = this.head; //! 1st Element
    let second = first.next; //! 2nd Element
    this.tail = this.head; //! TAIL becomes HEAD

    //! Loooop => 4 steps
    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head.next = null; //! HEAD points to null: I didn't reassign head (Still 1st Element before reversing)
    this.head = first; //! List is already reversed (first is now the Last element => Correct New HEAD is assigned)

    return this.printList;
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

const mostafaLinkedList = new LinkedList(10);
console.log("Initializing:\n", mostafaLinkedList);
mostafaLinkedList.printList();

mostafaLinkedList.append(25);
mostafaLinkedList.append(300);
console.log("\nAppending Nodes:\n", mostafaLinkedList);
mostafaLinkedList.printList();

mostafaLinkedList.prepend("Hello");
mostafaLinkedList.prepend("World");
console.log("\nPrepending Nodes:\n", mostafaLinkedList);
mostafaLinkedList.printList();

console.log("\nInsertion");
mostafaLinkedList.insert(2, "Cooooooool");

console.log("\nRemoving");
mostafaLinkedList.remove(2);
