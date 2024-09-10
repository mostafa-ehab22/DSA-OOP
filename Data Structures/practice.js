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

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const ending = leader.next;

    leader.next = newNode;
    newNode.next = ending;

    this.length++;

    console.log("INSERTING\n", this.printList());
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const ending = this.traverseToIndex(index + 1);

    leader.next = ending;

    this.length--;
  }

  reverse() {
    let first = this.head;
    let second = first.next;
    this.tail = this.head;

    while (second) {
      const third = second.next;

      second.next = first;
      first = second;
      second = third;
    }

    this.head.next = null;
    this.head = first;

    this.printList();
  }
}

const linkedListPractice = new LinkedList(10);

linkedListPractice.prepend("Start");
linkedListPractice.append("End");

linkedListPractice.printList();
linkedListPractice.reverse();
