class LinkedListNode {
  value: any;
  next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: LinkedListNode | null = null;
  bottom: LinkedListNode | null = null;
  length: number = 0;

  constructor() {}

  peek() {
    return this.top?.value;
  }

  push(value: any) {
    if (!value) {
      throw Error('Value to push not defined');
    }
    const newItem = new LinkedListNode(value);
    if (this.top == null) {
      this.top = newItem;
      this.bottom = this.top;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      throw Error('No items to pop');
    }
    this.top = this.top.next;
    this.length--;
    if (this.length == 0) {
      this.bottom = null;
    }
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());

console.log(myStack);
