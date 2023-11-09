class HashTable {
  List<dynamic> data = [];
  HashTable(int size) {
    this.data = new List.filled(size, 0);
  }

  _hash(String key) {
    num hash = 0;
    for (int i = 0; i < key.length; i++) {
      hash = (hash + key.codeUnitAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /* MY SOLUTION
  set(key: any, value: any) {
    this.data.push([key, value]);
  } //O(1)

  get(key: any) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i][0] == key) {
          return this.data[i][1];
        }
      }
    }
  } // O(n)
*/

  set(dynamic key, dynamic value) {
    dynamic address = this._hash(key);
    if (this.data[address] == 0) {
      this.data[address] = [];
    }
    this.data[address].add([key, value]);
    return this.data;
  }

  get(dynamic key) {
    dynamic address = this._hash(key);
    dynamic currentBucket = this.data[address];
    if (!currentBucket.isEmpty && currentBucket.length < 2) {
      return currentBucket[0][1];
    } // O(1)
    if (!currentBucket.isEmpty && currentBucket.length > 1) {
      for (int i = 0; i < currentBucket.length; i++)
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
    } // O(n)
  }
  //O(n)

  keys() {
    if (this.data.isEmpty) {
      throw Exception('The Hash Table is empty');
    }
    List<dynamic> keysArray = [];
    for (int i = 0; i < this.data.length; i++) {
      bool positionIsPopulated = this.data[i] != 0 && this.data[i].length > 0;
      if (positionIsPopulated && this.data.length > 1) {
        for (int j = 0; j < this.data[i].length; j++) {
          keysArray.add(this.data[i][j][0]);
        }
      }
      if (positionIsPopulated && this.data.length == 1) {
        keysArray.add(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

main() {
  HashTable myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000);
  print(myHashTable.data);
  print(myHashTable.get('grapes'));
  myHashTable.set('apples', 9);
  print(myHashTable.data);
  print(myHashTable.get('apples'));
  print(myHashTable.keys());
}
