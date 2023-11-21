class DoublyLinkedListNode {
  dynamic value;
  dynamic next;
  dynamic previous;

  DoublyLinkedListNode(dynamic value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  DoublyLinkedListNode? head;
  DoublyLinkedListNode? tail;
  int length = 1;
  DoublyLinkedList(int value) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    List<dynamic> array = [];
    var currentNode = this.head;
    while (currentNode != null) {
      array.add(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  prepend(dynamic value) {
    var newNode = new DoublyLinkedListNode(value);
    this.head?.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } //O(1)

  append(dynamic value) {
    var newNode = new DoublyLinkedListNode(value);
    this.tail?.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  } //O(1)

  insert(int index, dynamic value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    var newNode = new DoublyLinkedListNode(value);
    var leader = this.traverseToIndex(index - 1);
    var holdingPointer = leader.next;
    holdingPointer.previous = newNode;
    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.previous = leader;
    this.length++;
  }

  remove(int index) {
    if (index <= 0) {
      index = 1;
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    var leader = this.traverseToIndex(index - 1);
    var nodeToDelete = leader.next;
    var newNextNode = nodeToDelete.next;
    newNextNode.previous = leader;
    leader.next = newNextNode;
    this.length--;
  }

  traverseToIndex(int index) {
    int counter = 0;
    var currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode?.next;
      counter++;
    }
    return currentNode;
  }
}

void main() {
  DoublyLinkedList myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.remove(2);
  myLinkedList.remove(2);
  print(myLinkedList.printList());
  print(myLinkedList);
}
