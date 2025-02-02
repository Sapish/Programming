import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------

function guessNumber(target, guess) {
    if (Number.isInteger(target) === false || Number.isInteger(guess) === false) {
        return null;
    }


if (guess < target) {
    return "Too Low";
}else if (guess > target) {
    return "Too High";
}else {
    return "Correct!";
    }
}
//#endregion

//#region Tests --------------------------------------------------------------------

test.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
test.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
test.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

test.isEqual(guessNumber(10, 6.5), null, "If the guess is not an integer, then return null");
test.isEqual(guessNumber(10.5, 6), null, "If the target is not an integer, then return null");
test.isEqual(guessNumber(NaN, 6.5), null, "If the target is not a number, then return null");
test.isEqual(guessNumber(10, NaN), null, "If the guess is not a number, then return null");
test.isEqual(guessNumber(null, 6.5), null, "If the target is null, then return null");
test.isEqual(guessNumber(10, null), null, "If the guess is null, then return null");
test.isEqual(guessNumber("10", 6.5), null, "If the target is a string, then return null");
test.isEqual(guessNumber(10, "6.5"), null, "If the guess is a string, then return null");

test.isEqual(guessNumber(9, 9), "Correct!", "Target and guess is the same number");
test.isEqual(guessNumber(9, 12), "Too High", "Target is lower than the guess");
test.isEqual(guessNumber(9, 6), "Too Low", "Target is higher than the guess");

//#endregion
