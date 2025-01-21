/* Task 1
    Using one for loop, create a list of the duplicate words in the string. Use as many lists as you need.
    "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?"
*/
console.log("Task 1: ")

function findDuplicatedWords(sentence) {
    const words = sentence.split(' ');
    const duplicates = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (words.indexOf(word) !== i && !duplicates.includes(word)) {
            duplicates.push(word);
        }
    }
    return duplicates;
}

const sentence = "If the zookeeper had to choose, would the zookeeper choose to use the moose the zookeeper uses, or would the zookeeper choose to choose a new moose to use?";
const duplicateWords = findDuplicatedWords(sentence);
console.log("Duplicated words: ", duplicateWords);

/* Task 2
    Using loops, combine the two arrays into one.
    Use arrays [] only, no other data structures.
    First array: ['a', 'b', 'c', 'd', 'e']
    Second array: [1.1, 2.2, 3.3, 4.4, 5.5]
*/
console.log("Task 2:");

let firstArray = ['a', 'b', 'c', 'd', 'e'];
let secondArray = [1.1, 2.2, 3.3, 4.4, 5.5];
let combinedArray = [];

for (let i = 0; i < firstArray.length; i++) {
    combinedArray[combinedArray.length] = firstArray[i];
}

for (let i = 0; i < secondArray.length; i++) {
    combinedArray[combinedArray.length] = secondArray[i];
}

console.log(combinedArray);
/* Task 3
    Using two nested for loops and an array of type char, create the following pattern as a string:
    *******
    *     *
    *     *
    *  *  *
    *     *
    *     *
    *******
*/


/* Task 4
    Given the array of digits, create an array of the numbers missing from the sequence.
    Using loops, not built-in functionality.
*/
console.log("Task 4:")

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206];
let missingNumbers = [];

for (let i = 1; i <= 206; i++) {
    if (!digits.includes(i)) {
        missingNumbers.push(i);
    }
}

console.log(missingNumbers);

/* Task 5
    Find the length of the longest consecutive sequence of characters in the string below.
    Using only loops, no built-in functionality.
*/
console.log("Task 5: ");

let sourceString = "aqcmhrtutdvmyiqcyoyktnfninieglriaqvuxktzkfvfncfrrhfpptgwnhrsbcyjaizodspxxenkcbzwbwnzmoibdjpfdgzpzhoqevdjrilkzayytwycigelbrnusgzeqpimcgcazegftxrnbxinfbpnoljovywqpkfbiamjpedhqfuunowldjnazyttfdpdcytcvhjw";

function longestConsecutiveSequence(str) {
    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentStreak++;
        }else {
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1;
        }
    }
    return Math.max(longestStreak, currentStreak);
}

const longestSequenceLength = longestConsecutiveSequence(sourceString);
console.log("Length of longest consecutive sequence:", longestSequenceLength);