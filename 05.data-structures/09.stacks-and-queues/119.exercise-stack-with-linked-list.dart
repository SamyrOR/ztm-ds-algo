class LinkedListNode {
  dynamic value;
  dynamic next;

  LinkedListNode(dynamic value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  LinkedListNode? top = null;
  LinkedListNode? bottom = null;
  int length = 0;

  Stack() {}

  peek() {
    return this.top?.value;
  }

  push(dynamic value) {
    if (value == null) {
      throw Exception('Value to push not defined');
    }
    var newItem = new LinkedListNode(value);
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
    if (this.top == null) {
      throw Exception('No items to pop');
    }
    this.top = this.top?.next;
    this.length--;
    if (this.length == 0) {
      this.bottom = null;
    }
  }
}

void main() {
  var myStack = new Stack();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  print(myStack.peek());
  myStack.pop();
  print(myStack.peek());
}
