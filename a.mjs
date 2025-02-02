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
// Write your function her.

function multiply(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
        return NaN;
    }
    return a * b;
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Sum function");

// Valid inputs
tests.isEqual(multiply(1, 2), 2, "Product of 1 and 2 should be 2");
tests.isEqual(multiply(-5, 5), -25, "Product of -5 and 5 should be -25");
tests.isEqual(multiply(2.5, 3.5), 8.75, "Product of 2.5 and 3.5 should be 8.75");
tests.isEqual(multiply(5, 10), 50, "Product of 2, 3 and 4 should be 24");


// Invalid inputs
tests.isNotANumber(multiply("1", 2), 'Product of "1" and 2 should return NaN');
tests.isNotANumber(multiply(1, null), "Product of 1 and null should return NaN");
tests.isNotANumber(multiply(undefined, 3), "Product of undefined and 3 should return NaN");


// Edge cases
tests.isEqual(multiply(0, 0), 0, "Product of 0 and 0 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Product of Infinity and 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "Product of -Infinity and 1 should be -Infinity");



//#endregion