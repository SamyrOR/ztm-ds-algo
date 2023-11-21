//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

void main() {
  int? firstRecurringCharacter(List<int> input) {
    Map<dynamic, dynamic> obj = {};
    for (int i = 0; i < input.length; i++) {
      int actualEl = input[i];
      if (obj[actualEl] != null) {
        return actualEl;
      }
      obj[actualEl] = actualEl;
    }
    return null;
  }

  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2
  List<int> array1 = [0, 5, 1, 0, 3, 5, 1, 2, 4];
  List<int> array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
  List<int> array3 = [2, 3, 4, 5];
  List<int> array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
  print(firstRecurringCharacter(array1));
  print(firstRecurringCharacter(array2));
  print(firstRecurringCharacter(array3));
  print(firstRecurringCharacter(array4));
}
