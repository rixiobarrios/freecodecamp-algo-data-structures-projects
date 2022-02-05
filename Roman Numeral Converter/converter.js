// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// function convertToRoman(num) {
//     let I = 1;
//     let IV = 4;
//     let V = 5;
//     let IX = 9;
//     let X = 10;
//     let XL = 40;
//     let L = 50;
//     let XC = 90;
//     let C = 100;
//     let CD = 400;
//     let D = 500;
//     let CM = 900;
//     let M = 1000;

//     let arr = [];
//     while (num > 0) {
//         console.log(num);
//         switch (true) {
//             case num - M >= 0:
//                 arr.push('M');
//                 num -= M;
//                 break;
//             case num - CM >= 0:
//                 arr.push('CM');
//                 num -= CM;
//                 break;
//             case num - D >= 0:
//                 arr.push('D');
//                 num -= D;
//                 break;
//             case num - CD >= 0:
//                 arr.push('CD');
//                 num -= CD;
//                 break;
//             case num - C >= 0:
//                 arr.push('C');
//                 num -= C;
//                 break;
//             case num - XC >= 0:
//                 arr.push('XC');
//                 num -= XC;
//                 break;
//             case num - L >= 0:
//                 arr.push('L');
//                 num -= L;
//                 break;
//             case num - XL >= 0:
//                 arr.push('XL');
//                 num -= XL;
//                 break;
//             case num - X >= 0:
//                 arr.push('X');
//                 num -= X;
//                 break;
//             case num - IX >= 0:
//                 arr.push('IX');
//                 num -= IX;
//                 break;
//             case num - V >= 0:
//                 arr.push('V');
//                 num -= V;
//                 break;
//             case num - IV >= 0:
//                 arr.push('IV');
//                 num -= IV;
//                 break;
//             case num - I >= 0:
//                 arr.push('I');
//                 num -= I;
//                 break;
//         }
//     }

//     num = arr.join('');

//     return num;
// }

// convertToRoman(36);

class NumeralConverter {
    constructor(newValue) {
        this.value = newValue;
        this.numeral = '';
    }

    processNumeral(symbol, symbolValue) {
        while (this.value >= symbolValue) {
            this.numeral += symbol;
            this.value -= symbolValue;
        }
    }
}

function convertToRoman(num) {
    let converter = new NumeralConverter(num);
    converter.processNumeral('M', 1000);
    converter.processNumeral('CM', 900);
    converter.processNumeral('D', 500);
    converter.processNumeral('CD', 400);
    converter.processNumeral('C', 100);
    converter.processNumeral('XC', 90);
    converter.processNumeral('L', 50);
    converter.processNumeral('XL', 40);
    converter.processNumeral('X', 10);
    converter.processNumeral('IX', 9);
    converter.processNumeral('V', 5);
    converter.processNumeral('IV', 4);
    converter.processNumeral('I', 1);
    return converter.numeral;
}

console.log(convertToRoman(36));
