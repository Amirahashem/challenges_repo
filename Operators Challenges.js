/*
  Challenge 1
*/

let a = 10;  
let b = "20"; 
let c = 80;  

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


/*
  [++a] [+] 
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
[++a]
- Value: 11
- Explain: Increment a by 1. [pre increment]
[+]
- Explain: addition operator.
[+b++]
- Value: 20
- Explain: convert b to number and increment b by 1. [+unary plus and post icrement] [21]
[+]
- Explain: addition operator.
[+c++]
- Value: 80
- Explain: convert c to number and increment c by 1. [+unary plus and post icrement] [81]
[-]
- Explain: subtraction operator.
[+a++]
- Value: 11
- Explain:  increment a by 1. [+unary plus and post icrement] [12]
*/


/*
[++a]
- Value: 11
- Explain: Increment a by 1. [pre icrement]
[+]
- Explain: addition operator.
[-b]
- Value: -20
- Explain: convert b to number and negate it. [-unary negation]
[+]
- Explain: addition operator.
[+c++]
- Value: 80
- Explain: convert c to number and increment c by 1. [+unary plus and post increment] [81]
[-]
- Explain: subtraction operator.
[-a++]
- Value: -11
- Explain:  increment a by 1 and negate it. [-unary negation and post increment] [-10]
[+]
- Explain: addition operator.
[+a]
- Value: -10
- Explain: addition operator. [unary plus]
*/



/*[--c]
- Value: 81
- Explain: Decrement c by 1. [pre decrement]
[+]  
- Explain: addition operator.
[+b]
- Value: 20
- Explain: convert b to number. [+unary plus]
[+]
- Explain: addition operator.
[--a]
- Value: 9
- Explain: Decrement a by 1. [pre decrement]
[*]
- Explain: multiplication operator.
[+b++]
- Value: 20
- Explain:  convert b to number and increment b by 1. [+unary plus and post increment] [21]
[*]
- Explain: multiplication operator.
[a]
- Value: 9
- Explain: a is 9.
[+]
- Explain: addition operator.
[--a]
- Value: 8
- Explain: decrement a by 1. [pre decrement]
[-]
- Explain: subtraction operator.
[+true]
- Value: 1
- Explain: convert true to number. [+unary plus]
*/



/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173

