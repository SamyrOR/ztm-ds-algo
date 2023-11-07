class MyArray {
    length: number = 0;
    data: { [key: number]: string } = {};

    constructor() {}

    get(index: number) {
        return this.data[index];
    }

    push(item: any) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        this._deleteLastItem();
        this._decrementLength();

        return lastItem;
    }

    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this._deleteLastItem();
        this._decrementLength();
    }

    _deleteLastItem() {
        delete this.data[this.length - 1];
    }

    _decrementLength() {
        this.length--;
    }
}

let newMyArray = new MyArray();
newMyArray.push('hi');
newMyArray.push('you');
newMyArray.push('!');
newMyArray.delete(0);
newMyArray.push('are');
newMyArray.push('nice');
newMyArray.delete(1);
console.log(newMyArray);
