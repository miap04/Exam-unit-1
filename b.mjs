import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Sum function");

// Valid inputs
tests.isEqual(formatName("mia pedersen"), "Mia Pedersen", "Format 'mia pedersen' should return 'Mia Pedersen'");
tests.isEqual(formatName("   mia pedersen"), "Mia Pedersen", "Format '   mia pedersen' should return 'Mia Pedersen'");
tests.isEqual(formatName("mia pedersen   "), "Mia Pedersen", "Format 'mia pedersen   ' should return 'Mia Pedersen'");

// Invalid inputs
tests.isEqual(formatName(null), null, "Format null should return null");
tests.isEqual(formatName(123), null, "Format 123 should return null");
tests.isEqual(formatName("@mia@pede@rsen"), null, "Format '@mia@pede@rsen' should return null");

// Edge cases
tests.isEqual(formatName(""), "", "Format '' should return ''");
tests.isEqual(formatName("   "), "", "Format '   ' should return ''");

//#endregion