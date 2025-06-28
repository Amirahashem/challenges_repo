/*
  Regular Expression
  - Challenge
*/


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// Write Your Pattern Here

let Regular = /(https?:\/\/)?(\w+\.)?\w+\.\w+(:\d+)?(\/[\w-]+)*(\.\w+)?(\?\w+=\w+(&\w+=\w+)*)?/ig; 

console.log(url1.match(Regular));
console.log(url2.match(Regular));
console.log(url3.match(Regular));
console.log(url4.match(Regular));
console.log(url5.match(Regular));