// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let newArr: number[] = [];
    newArr = [...arr1, ...arr2];
    newArr = newArr.sort((a, b) => a - b);
    return newArr;
}

function naiveMergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let newArr: number[] = [];
    newArr = [...arr1, ...arr2];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > newArr[i + 1]) {
            let handle = newArr[i];
            newArr[i] = newArr[i + 1];
            newArr[i + 1] = handle;
        }
    }
    return newArr;
}
//T: O(n)
//S: O(n)
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(naiveMergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
