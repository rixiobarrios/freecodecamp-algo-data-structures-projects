// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// const LOOKUP = {
//     PENNY: 1,
//     NICKEL: 5,
//     DIME: 10,
//     QUARTER: 25,
//     ONE: 100,
//     FIVE: 500,
//     TEN: 1000,
//     TWENTY: 2000,
//     'ONE HUNDRED': 10000,
// };

// function checkCashRegister(price, cash, cid) {
//     const changeDue = cash - price;
//     let changeDueCents = changeDue * 100;
//     const available = cid.reduce((acc, [, amount]) => {
//         return acc + amount * 100;
//     }, 0.0);
//     if (available === changeDueCents) {
//         return { status: 'CLOSED', change: cid };
//     }

//     const change = cid
//         .reverse()
//         .map(([name, amount]) => {
//             let total = 0;
//             let nameValue = LOOKUP[name];
//             let amountCents = amount * 100;
//             while (nameValue <= changeDueCents && amountCents > 0) {
//                 total += nameValue;
//                 changeDueCents -= nameValue;
//                 amountCents -= nameValue;
//             }
//             return [name, total / 100];
//         })
//         .filter(([, amount]) => amount > 0);

//     if (changeDueCents > 0) {
//         return { status: 'INSUFFICIENT_FUNDS', change: [] };
//     }

//     return { status: 'OPEN', change };
// }
