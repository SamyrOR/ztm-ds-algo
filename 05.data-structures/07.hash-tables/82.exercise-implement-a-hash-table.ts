class HashTable {
  data: any[];
  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: any) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
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

  set(key: any, value: any) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key: any) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket && currentBucket.length < 2) {
      return currentBucket[0][1];
    } // O(1)
    if (currentBucket && currentBucket.length > 1) {
      for (let i = 0; i < currentBucket.length; i++)
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
    } // O(n)
  }
  //O(n)

  keys() {
    if (!this.data.length) {
      throw Error('The Hash Table is empty');
    }
    const keysArray: any[] = [];
    for (let i = 0; i < this.data.length; i++) {
      let positionIsPopulated = this.data[i] && this.data[i].length;
      if (positionIsPopulated && this.data.length > 1) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
      if (positionIsPopulated && this.data.length == 1) {
        keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
console.log(myHashTable);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
