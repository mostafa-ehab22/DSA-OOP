class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const linkedListPractice = new LinkedList(10);

linkedListPractice.prepend("Start");
linkedListPractice.append("End");

linkedListPractice.printList();
