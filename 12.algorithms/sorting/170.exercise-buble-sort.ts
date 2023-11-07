const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let handle = arr[i];
        arr[i] = arr[j];
        arr[j] = handle;
      }
    }
  }
} //O(n^2)

bubbleSort(numbers);
console.log(numbers);
