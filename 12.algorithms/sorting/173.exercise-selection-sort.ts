const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    let handle = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = handle;
  }
}
selectionSort(numbers);
console.log(numbers);
