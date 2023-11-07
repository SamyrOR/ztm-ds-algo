class MyArray {
  int length = 0;
  final Map data = Map<int, String>();

  get(int index) {
    return this.data[index];
  } // O(1)

  push(String item) {
    this.data[this.length] = item;
    this.length++;
  } //O(1)

  pop() {
    String lastItem = this.data[this.length - 1];
    this._deleteLastItem();
    this._decrementLength();

    return lastItem;
  }

  delete(int index) {
    String item = this.data[index];
    this.shiftItems(index);
    return item;
  } // O(1)

  shiftItems(int index) {
    for (int i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this._deleteLastItem();
    this._decrementLength();
  } //O(n)

  _deleteLastItem() {
    this.data.remove(this.length - 1);
  } //O(1)

  _decrementLength() {
    this.length--;
  } //O(1)
}

main() {
  MyArray newMyArray = new MyArray();
  newMyArray.push('hi');
  newMyArray.push('you');
  newMyArray.push('!');
  newMyArray.delete(0);
  newMyArray.push('are');
  newMyArray.push('nice');
  newMyArray.delete(1);
  print(newMyArray.data.values);
  print(newMyArray.length);
}
