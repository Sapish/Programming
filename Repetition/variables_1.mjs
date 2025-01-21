/* Task 1
    Declare two variables, set the value of the first variable to 1 and the value of the second to 2.
    Now swap so the first variable gets the value of the second and vice versa.
*/
console.log("Task 1:");

let a = 1;
let b = 2;

a = 2;
b = 1;


console.log(a, b);

/* Task 2
    Without using built-in Math functionality or constants in JavaScript.
    Calculate the area of a circle with the radius 6.
*/
console.log("Task 2:");

const radius = 6;
const PI = 3.14;
let A;

A = PI * (radius ** 2);

console.log(A);

/* Task 3
    Given the two strings "If at first you do not succeed, try, try again" and "Fall seven times, stand up eight".
    Create a variable that contains all the letters that are in both strings but only once and in alphabetical order.
    Consider 'A' and 'a' the same letter.
*/
console.log("Task 3: Incomplete.")


/* Task 4
    Declare three variables. The first two should have the values 6 and 2.
    Make it so that the third variable is 10.
*/
console.log("Task 4:")

let valueOne = 6;
let valueTwo = 2;
let valueThree = valueOne + valueTwo + valueTwo;

console.log(valueOne, valueTwo, valueThree);

/* Task 5
    Given a variable set to a random floating point value (you pick the value).
    Instantiate a second variable that is true if the first variable is greater than 22.34.
*/
console.log("Task 5:");

const myNumber = 6.7;
let secondVariable;
const greaterThan = 22.34;

if (myNumber > greaterThan) {
    secondVariable = true;
}else
    secondVariable = false;

console.log(secondVariable);



/* Task 6
    Given the string "Life is short. Smile while you still have teeth." and the string "The best therapy is a good laugh and great friends.".
    Create a new variable that is the intersection of words between the two strings.
    Create a new variable that is the union of words between the two strings.
*/
console.log("Task 6: Incomplete.")

