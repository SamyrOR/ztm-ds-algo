class LinkedListNode {
  value: any;
  next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  length: number;
  constructor(value: number) {
    this.head = {
      value: value,
      next: null,
    };
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
  /* My Solution
  prepend(value: number) {
    let handle = this.head;
    this.head = {
      value: value,
      next: handle,
    };
    this.length++;
  } // O(1)
  */
  prepend(value: any) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } //O(1)

  /* MY SOLUTION
  append(value: number) {
    let handle = this.head;
    for (let i = 0; i < this.length; i++) {
      if (handle.next == null) {
        handle.next = {
          value: value, next: null,
        };
        this.tail = handle.next;
        this.length++;
        return;
      }
      handle = handle.next;
    }
  } // O(n)
*/
  append(value: any) {
    const newNode = new LinkedListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } //O(1)

  /* MY SOLUTION
  insert(index: number, value: any) {
    let currentNode = this.head;
    if (index >= this.length) {
      this.append(value);
      return;
    }
    if (index <= 0) {
      this.prepend(value);
      return;
    }
    let newNode = new LinkedListNode(value);
    for (let i = 0; i <= this.length; i++) {
      if (index == i + 1) {
        let nextHandle = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextHandle;
        this.length++;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  */

  insert(index: number, value: any) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    const newNode = new LinkedListNode(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
    leader.next = nodeToDelete.next;
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

  /* MY SOLUTION
  reverse() {
    if (this.length == 1) {
      return this;
    }
    let counter = this.length - 1;
    let reversedLinkedList = new LinkedList(this.tail.value);
    while (counter > 0) {
      let pointerHandler = this.traverseToIndex(counter - 1);
      reversedLinkedList.append(pointerHandler.value);
      counter--;
    }
    return reversedLinkedList.printList();
  }
  */

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
// myLinkedList.insert(-1, 11);
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());
