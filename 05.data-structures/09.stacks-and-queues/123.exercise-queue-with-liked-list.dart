class LinkedListNode {
  dynamic value;
  dynamic next;
  LinkedListNode(dynamic value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  LinkedListNode? first = null;
  LinkedListNode? last = null;
  int length = 0;
  constructor() {}

  peek() {
    return this.first?.value;
  }

  enqueue(dynamic value) {
    if (value == null) {
      throw Exception('Invalid value to add');
    }
    var newItem = new LinkedListNode(value);
    if (this.first == null) {
      this.first = newItem;
      this.last = this.first;
      this.length++;
      return;
    }
    if (this.last != null) {
      this.last?.next = newItem;
      this.last = newItem;
    }
    this.length++;
  }

  dequeue() {
    if (this.first == null) {
      throw Exception('No items to dequeue');
    }
    var itemHandler = this.first;
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

void main() {
  var myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  print(myQueue.peek());
  myQueue.dequeue();
  myQueue.dequeue();
  print(myQueue.peek());
  print(myQueue);
  print(myQueue.isEmpty());
}
