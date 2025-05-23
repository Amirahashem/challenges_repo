/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(a, b, c) {
  // Check the types of the arguments
  const name = typeof a === 'string' ? a : typeof b === 'string' ? b : c;
  const age = typeof a === 'number' ? a : typeof b === 'number' ? b : c;
  const status = typeof a === 'boolean' ? a : typeof b === 'boolean' ? b : c;

  // Construct the message
  const message = `Hello ${name}, Your Age Is ${age}, You Are ${status ? 'Available' : 'Not Available'} For Hire`;

  // Return the message
  return message;
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"