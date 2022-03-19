// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

// // Regular Expression test cases:
// const regEx1 = /^\d\d\d-\d\d\d-\d\d\d\d$/; //555-555-5555
// const regEx2 = /^\d{3}-\d{3}-\d{4}$/; //555-555-5555
// const regEx3 = /^\(\d{3}\)-\d{3}-\d{4}$/; //(555)-555-5555
// const regEx4 = /^\(\d{3}\)\s\d{3}-\d{4}$/; //(555) 555-5555
// const regEx5 = /^\(\d{3}\)\s?\d{3}-\d{4}$/; //(555) 555-5555/(555)555-5555
// const regEx6 = /^\(\d{3}\)\s\d{3}\s\d{4}$/; //(555) 555 5555
// const regEx7 = /^\(\d{3}\)\s?\d{3}\s?\d{4}$/; //(555) 555 5555/(555)5555555
// const regEx8 = /^\d{10}$/; //5555555555
// const regEx9 = /^\d{3}\s\d{3}\s\d{4}$/; //555 555 5555
// const regEx10 = /^\d{3}\s?\d{3}\s?\d{4}$/; //555 555 5555/5555555555
// const regEx11 = /^1\s\d{3}\s\d{3}\s\d{4}$/; //1 555 555 5555
// const regEx12 = /^1\s\d{3}-\d{3}-\d{4}$/; //1 555-555-5555
// const regEx13 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/; //1 (555) 555-5555
// const regEx14 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/; //1(555)555-5555

// //create an array of regexes
// const allRegExes = [
//     regEx1,
//     regEx2,
//     regEx3,
//     regEx4,
//     regEx5,
//     regEx6,
//     regEx7,
//     regEx8,
//     regEx9,
//     regEx10,
//     regEx11,
//     regEx12,
//     regEx13,
//     regEx14,
// ];

// function telephoneCheck(str) {
//     //loop through regexes
//     for (let regex of allRegExes) {
//         //if one matches return true
//         if (regex.test(str)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(telephoneCheck('555-555-5555'));

function telephoneCheck(str) {
    let reg = /^(1\s?\-?)*(\(\d{3}\)|\d{3})[-\s]*\d{3}[-\s]*\d{4}$/;
    return reg.test(str);
}

console.log(telephoneCheck('555-555-5555'));
