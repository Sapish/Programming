import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
function multiply(...numbers) {
    if (numbers.length === 0) {
        return NaN;
    }
    let multipledValue = 1;
    for (const num of numbers) {
        const parsedNum = Number(num);
        if (Number.isNaN(parsedNum)) {
            return NaN;
        }
        multipledValue *= parsedNum;
    }
    return multipledValue;
}



//#endregion


//#region Tests --------------------------------------------------------------------
const tests = test("Test for multiplication");

tests.isNotANumber(multiply("x", 5), 'The sum of x and 5 should return NaN');
tests.isNotANumber(multiply(undefined, 6), 'The sum of undefined and 6 should return NaN');
tests.isNotANumber(multiply(null, 6), 'The sum of null and 6 should return NaN');
tests.isNotANumber(multiply("x", 3, 6), 'The sum of x, 3 and 6 should return NaN');

tests.isEqual(multiply("6", 6), 36, 'The sum of "6" and 6 should return 36');
tests.isEqual(multiply("4", "4"), 16, 'The sum of 4 times 4 should return 16');
tests.isEqual(multiply("4.5", "2"), 9, 'The sum of 4.5 times 2 should return 9');
tests.isEqual(multiply("3", "2", "2"), 12, 'The sum of 3 times 2 times 2 should return 12');

tests.isEqual(multiply(Infinity, 6), Infinity, 'The sum of infinity and 6 should return infinity');
tests.isEqual(multiply(-Infinity, 6), -Infinity, 'The sum of -infinity and 6 should return -infinity');
tests.isEqual(multiply(-Infinity, -6), Infinity, 'The sum of -infinity and -6 should return infinity');
tests.isEqual(multiply(-Infinity, -Infinity), Infinity, 'The sum of -infinity and -infinity should return infinity');
tests.isEqual(multiply(Infinity, Infinity), Infinity, 'The sum of infinity and infinity should return infinity');

tests.isEqual(multiply(0, 6), 0, 'The sum of 0 and 6 should return 0');
tests.isEqual(multiply(6, 0), 0, 'The sum of 6 and 0 should return 0');
tests.isEqual(multiply(0, 0), 0, 'The sum of 0 and 0 should return 0');
tests.isNotANumber(multiply(NaN, 6), 'The sum of NaN and 6 should return NaN');
tests.isNotANumber(multiply(6, NaN), 'The sum of 6 and NaN should return NaN');
tests.isNotANumber(multiply(), 'The sum of nothing should return NaN');

//#endregion