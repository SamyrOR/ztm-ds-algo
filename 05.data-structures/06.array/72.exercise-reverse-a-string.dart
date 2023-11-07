main() {
  String reverse(String str) {
    if (str.isEmpty || str.length < 2) {
      throw Exception(
          'Input data is invalid: It is not a string or the length is less than 2.');
    }
    String reversedString = '';
    List<String> strAsArray = str.split('');
    for (int i = strAsArray.length; i > 0; i--) {
      reversedString += strAsArray[i - 1];
    }
    return reversedString;
  }

//T: O(n)
//S: O(n)
  print(reverse('Hi My name is Samyr'));
}
