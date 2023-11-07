main() {
  List<int> array1 = [1, 2, 3, 9];
  List<int> array2 = [1, 2, 4, 4];

  bool pairHaveSum(List<int> arr, int targetSum) {
    for (int i = 0; i < arr.length; i++) {
      for (int j = 1; j < arr.length; j++) {
        int sum = arr[i] + arr[j];
        if (sum == targetSum) {
          return true;
        }
      }
    }
    return false;
  } //O(n^2)

  print(pairHaveSum(array2, 8));
}
