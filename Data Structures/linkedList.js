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

  insert(index, nodeValue) {
    //? Check params: If insertion index greater than length => Add to list ending
    if (index >= this.length) {
      return this.append();
    }

    const newNode = new Node(nodeValue);

    //? Leader --> Node --> Ending

    //! Getting leader node: precedes actual index of inserted node
    const leader = this.traverseToIndex(index - 1);
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    //! Go through list until reaching index
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
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
