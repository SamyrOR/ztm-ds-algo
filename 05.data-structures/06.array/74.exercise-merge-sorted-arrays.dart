// function mergeSortedArrays(arr1: number[], arr2: number[]) {
//     return [...arr1, ...arr2].sort((a, b) => a - b);
// }
main() {
  List<int> mergeSortedArrays(List<int> arr1, List<int> arr2) {
    List<int> newArr = [];
    newArr = [...arr1, ...arr2];
    newArr.sort((a, b) => a - b);
    return newArr;
  }

  List<int> naiveMergeSortedArrays(List<int> arr1, List<int> arr2) {
    List<int> newArr = [];
    newArr = [...arr1, ...arr2];
    for (int i = 0; i < newArr.length; i++) {
      var nextElement = i + 1;
      if (nextElement < newArr.length) {
        if (newArr[i] > newArr[i + 1]) {
          int handle = newArr[i];
          newArr[i] = newArr[i + 1];
          newArr[i + 1] = handle;
        }
      }
    }
    return newArr;
  }

//T: O(n)
//S: O(n)
  print(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  print(naiveMergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
}
