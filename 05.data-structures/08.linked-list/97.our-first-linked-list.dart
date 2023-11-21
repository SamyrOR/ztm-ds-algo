class LinkedListNode {
  dynamic value;
  dynamic next;

  LinkedListNode(dynamic value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  LinkedListNode? head;
  LinkedListNode? tail;
  int length = 1;
  LinkedList(int? value) {
    this.head = LinkedListNode(
      value = value,
    );
    this.tail = this.head;
  }
  List<int> printList() {
    List<int> array = [];
    var currentNode = this.head;
    while (currentNode != null) {
      array.add(currentNode.value);
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
  void prepend(dynamic value) {
    var newNode = new LinkedListNode(value);
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
  void append(dynamic value) {
    var newNode = new LinkedListNode(value);
    this.tail?.next = newNode;
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

  void insert(int index, dynamic value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    var newNode = new LinkedListNode(value);
    var leader = this.traverseToIndex(index - 1);
    var holdingPointer = leader?.next;
    leader?.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  void remove(int index) {
    if (index <= 0) {
      index = 1;
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    var leader = this.traverseToIndex(index - 1);
    var nodeToDelete = leader?.next;
    leader?.next = nodeToDelete.next;
    this.length--;
  }

  LinkedListNode? traverseToIndex(int index) {
    int counter = 0;
    var currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode?.next;
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

  List<LinkedListNode?>? reverse() {
    if (this.head != null && this.head!.next == null) {
      return [this.head];
    }
    var first = this.head;
    this.tail = this.head;
    var second = first?.next;

    while (second != null) {
      var temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head?.next = null;
    this.head = first;
    this.printList();
  }
}

void main() {
  var myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
// myLinkedList.insert(-1, 11);
  myLinkedList.remove(2);
  myLinkedList.remove(2);
  myLinkedList.reverse();
  print(myLinkedList.printList());
}
