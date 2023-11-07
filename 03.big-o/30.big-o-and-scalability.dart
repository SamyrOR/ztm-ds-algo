main() {
  const nemo = ['nemo'];
  const everyone = [
    'dory',
    'bruce',
    'marlin',
    'nemo',
    'gill',
    'bloat',
    'nigel',
    'squirt',
    'darla',
    'hank',
  ];
  List<String> large = List.filled(100000, "nemo");
  void findNemo(array) {
    DateTime t0 = DateTime.now();
    for (int i = 0; i < array.length; i++) {
      if (array[i] == 'nemo') {
        print(" Found NEMO! At position ${i} ");
      }
    }
    DateTime t1 = DateTime.now();
    print("Call to find Nemo took  ${t1.compareTo(t0)} milliseconds");
  }

  // findNemo(nemo);
  // findNemo(everyone);
  findNemo(large);
}
