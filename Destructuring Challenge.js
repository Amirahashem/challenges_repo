/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let [{ title, age, available, skills: [, css] }, ,] = myFriends;
  if (available) {
    available = "available";
  } else {
    available = "not avalible"
  }
  console.log(`my name is ${title} , my age is ${age}, i am ${available} and my skill is ${css}`);

} else if (chosen === 2) {
  let [,{ title, age, available, skills: [, Django] } ,] = myFriends;
  if (available) {
    available = "available";
  } else {
    available = "not avalible"
  }
  console.log(`my name is ${title} , my age is ${age}, i am ${available} and my skill is ${Django}`);

}else if(chosen = 3) {
    let [,,{ title, age, available, skills: [, Laravel] } ] = myFriends;
  if (available) {
    available = "available";
  } else {
    available = "not avalible"
  }
  console.log(`my name is ${title} , my age is ${age}, i am ${available} and my skill is ${Laravel}`);
}

// console.log("ll")