class Stack {
  List<dynamic> content = [];
  //You can simplify removing all this other properties, than this you keep work as well.
  dynamic top;
  dynamic bottom;
  late dynamic length = content.length;

  Stack() {}

  peek() {
    if (this.top == null) {
      throw Exception('No items to show');
    }

    return this.top;
  }

  push(dynamic value) {
    if (value == null) {
      throw Exception('Value to push not defined');
    }
    this.content.add(value);
    this.length = this.content.length;
    this.top = this.content[this.length - 1];
    this.bottom = this.content[0];
  }

  pop() {
    if (this.top == null) {
      throw Exception('No items to pop');
    }
    this.content.removeLast();
    this.length = this.content.length;
    if (this.content.length == 0) {
      this.top = null;
      this.bottom = null;
    }
    this.top = this.content[this.length - 1];
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
  myStack.pop();

  print(myStack);
}
