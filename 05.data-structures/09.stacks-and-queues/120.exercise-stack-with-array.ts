class Stack {
  content: any[] = [];
  //You can simplify removing all this other properties, than this you keep work as well.
  top: any;
  bottom: any;
  length: any = this.content.length;

  constructor() {}

  peek() {
    if (!this.top) {
      throw Error('No items to show');
    }

    return this.top;
  }

  push(value: any) {
    if (!value) {
      throw Error('Value to push not defined');
    }
    this.content.push(value);
    this.length = this.content.length;
    this.top = this.content[this.length - 1];
    this.bottom = this.content[0];
  }

  pop() {
    if (!this.top) {
      throw Error('No items to pop');
    }
    this.content.pop();
    this.length = this.content.length;
    this.top = this.content[this.length - 1];
    if (this.content.length == 0) {
      this.top = null;
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
myStack.pop();
myStack.pop();

console.log(myStack);
