let array1 = [1, 2, 3, 9];
let array2 = [1, 2, 4, 4];

function pairHaveSum(arr: number[], targetSum: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum == targetSum) {
                return true;
            }
        }
    }
    return false;
}
console.log(pairHaveSum(array2, 8));
