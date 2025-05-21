/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero") , counter).reverse()); // ["Elham", "Mazero"]

console.log(my[my.indexOf("Elham")].slice(zero,my.indexOf("Elham")) + my[my.indexOf("Mazero")].slice(my.indexOf("Elham"))); // "Elzero"

console.log(my[my.indexOf("Mazero")][counter+my.indexOf("Mazero")] + my[my.indexOf("Mazero")][my.indexOf("Ameer")].toUpperCase()); // "rO"