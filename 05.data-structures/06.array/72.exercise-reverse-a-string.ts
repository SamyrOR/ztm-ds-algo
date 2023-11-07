function reverse(str: string): string {
    if (!str || str.length < 2) {
        throw Error(
            'Input data is invalid: It is not a string or the length is less than 2.'
        );
    }
    let reversedString = '';
    let strAsArray = str.split('');
    for (let i = strAsArray.length; i > 0; i--) {
        reversedString += strAsArray[i - 1];
    }
    return reversedString;
}
//T: O(n)
//S: O(n)
console.log(reverse('Hi My name is Samyr'));
