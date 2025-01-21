/*  Task 1
    Create a function that given an array of integers returns the larger number in the array.
    Do not use any built in functionality, use only basic js.
*/
console.log("Task 1:");

let numbers = [1, 2, 3, 4, 5, 12, 23, 14, 16, 98, 16];

function biggestNumber(array) {
    if (array.length === 0) {
        return null;
    }
    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

const biggest = biggestNumber(numbers);
console.log("Largest number: ", biggest);

/*  Task 2
    Create a function that returns an array of n positive numbers (only integers), where n is given as a parameter.
    The numbers should be unique but not consecutive.
    Do not use any built in functionality for sorting, matching etc. (You may use Random and Math functions)
*/
console.log("Task 2: ");

function generateUniqueNumbers(n) {
    const result = [];
    while (result.length < n) {
        const num = Math.floor(Math.random() * 100);
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

const numberOfNumbers = 10;
const uniqueNumbers = generateUniqueNumbers(numberOfNumbers);
console.log(uniqueNumbers);

/*  Task 3
    Create a function that given a string and a pattern returns true if the pattern matches the string.
    Do not use any built in functionality for matching (no regex)etc.

    A pattern is defined as a series of *,n,s and -.
    * matches anything except an empty string.
    n matches any number.
    s matches any string.
    - matches a single space.

    Example:
    pattern: sssss-nnn-*****
    string: "Hello 123 World"

*/
console.log("Task 3: Incomplete");



/*  Task 4
    Create a function that reads an indetermind number of integers from the console and returns the sum of the numbers.
*/
console.log("Task 4: Incomplete");

/*  Task 5
    Create a function that given a string returns the number of words in the string.
    Do not use any built in functionality for splitting strings etc.
*/
console.log("Task 5: Got some help on this one from a friend");

function countWords(str) {
    let count = 0;
    let isWord = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !isWord) {
            count++;
            isWord = true;
        }else if (str[i] === ' ') {
            isWord = false;
        }
    }
    return count;
}

const sentence = "Multiple word sentence.";
const wordCount = countWords(sentence);
console.log("Number of words: ", wordCount);

/*  Task 6
    Create the functions that given a color value in hex format reutns the RGB and CMYK values .
    Do not use any built in functionality.

    Hex is defined as #RRGGBB. Where RR, GG and BB are two digit hexadecimal numbers.
    RGB is defined as three integers between 0 and 255.
    CMYK is defined as four floats between 0 and 1.

    The conversion from RGB to CMYK is defined as:
    K = 1 - max(R, G, B) / 255
    C = (1 - R / 255 - K) / (1 - K)
    M = (1 - G / 255 - K) / (1 - K)
    Y = (1 - B / 255 - K) / (1 - K)

    Tip: 
    - You can use int.Parse("FF", System.Globalization.NumberStyles.HexNumber) to convert a hex number to an integer.
    - You can read a substring from a string using str.Substring(startIndex, length)
    - You can return multiple values from a function by using {}.

*/

console.log("Task 6: Incomplete");


