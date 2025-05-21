/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
    let k = 0;
    document.write(`<div>`);
    if (myAdmins[i] === "Stop") break;
    document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]} <div>`);
    document.write(`<h3> Team Members: </h3>`)
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
            document.write(`<p>- ${k += 1} ${myEmployees[j]} </p>`);
        }
    }
    document.write(`</div>`);


}