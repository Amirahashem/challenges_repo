/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function (ele) {
    return ele !== myString.charAt(--myString.length) && isNaN(parseInt(ele)) ;
}).map(function (ele) {
    return ele === '_' ? " ": ele;
}).map(function (ele) {
    return ele.length === +true ? ele : ele.charAt(--ele.length);
}).reduce(function (acc, current) {
    return acc + current;
})

console.log(solution); // Elzero Web School