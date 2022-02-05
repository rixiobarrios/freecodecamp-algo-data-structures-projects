//Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// function stringWithOnlyAlphanumeric(str) {
//     //Replace takes a regex and a replacement string
//     return str.replace(/[^a-z0-9]/gi, '');
// }

// console.log(stringWithOnlyAlphanumeric('Hello, World!'));

// function stringLowercased(str) {
//     //Make string lowercase
//     return str.toLowerCase();
// }

// console.log(stringLowercased('Hello, World!'));

// function stringReversed(str) {
//     //Reverse the string
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// console.log(stringReversed('Hello, World!'));

// function palindrome(str) {
//     //Remove alpha numeric characters
//     const cleanedUpStr = stringWithOnlyAlphanumeric(str);
//     //Make string lowercase
//     const lowercaseStr = stringLowercased(cleanedUpStr);
//     //Reverse string
//     const reversedStr = stringReversed(lowercaseStr);
//     //Return new reversed string
//     console.log(`Is "${lowercaseStr}" equals to ${reversedStr}"?`);
//     return lowercaseStr == reversedStr;
// }

// console.log(palindrome('Hannah'));

function palindrome(str) {
    //Remove non-Alphanumeric characters and lower case
    const cleanLowerCaseString = str.replace(/[\W_]/gi, '').toLowerCase();
    console.log(cleanLowerCaseString);
    const splitArray = cleanLowerCaseString.split('');
    console.log(splitArray);
    const reversedArray = splitArray.reverse();
    console.log(reversedArray);
    const reversedString = reversedArray.join('');
    console.log(reversedString);
    return reversedString == cleanLowerCaseString;
}

palindrome('!!!eYe__');
