class LinkedListNode {
  value: any;
  next: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: LinkedListNode | null = null;
  last: LinkedListNode | null = null;
  length: number = 0;
  constructor() {}

  peek() {
    return this.first?.value;
  }

  enqueue(value: any) {
    if (!value) {
      throw Error('Invalid value to add');
    }
    let newItem = new LinkedListNode(value);
    if (this.first == null) {
      this.first = newItem;
      this.last = this.first;
      this.length++;
      return;
    }
    if (this.last != null) {
      this.last.next = newItem;
      this.last = newItem;
    }
    this.length++;
  }

  dequeue() {
    if (this.first == null) {
      throw Error('No items to dequeue');
    }
    const itemHandler = this.first;
    this.first = this.first?.next;
    this.length--;
    if (this.length == 0) {
      this.last = null;
    }
    return itemHandler;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.isEmpty());
