/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//   // Parameter ?
//   return `String [${names.join("] , [")}] => Done !`;
// };

// Arrow Function
let names = (...names) =>` String [${names.join("] , [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// Regular Fnction
function calc(one, tow, ...nums) {
  return one + two + nums[0];
}

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80