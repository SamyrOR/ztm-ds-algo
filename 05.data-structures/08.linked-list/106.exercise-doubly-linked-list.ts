class DoublyLinkedListNode {
  value: any;
  next: any;
  previous: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode;
  tail: DoublyLinkedListNode;
  length: number;
  constructor(value: number) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array: any[] = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  prepend(value: any) {
    const newNode = new DoublyLinkedListNode(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } //O(1)

  append(value: any) {
    const newNode = new DoublyLinkedListNode(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  } //O(1)

  insert(index: number, value: any) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    const newNode = new DoublyLinkedListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    holdingPointer.previous = newNode;
    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.previous = leader;
    this.length++;
  }

  remove(index: number) {
    if (index <= 0) {
      index = 1;
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToDelete = leader.next;
    const newNextNode = nodeToDelete.next;
    newNextNode.previous = leader;
    leader.next = newNextNode;
    this.length--;
  }

  traverseToIndex(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList);
