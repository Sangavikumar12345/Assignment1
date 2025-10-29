// Declare variables of different data types
let Name = "vino";         // string
let age = 25;               // number
let isStudent = true;       // boolean
let job;                    // undefined
let city = null;            // null
let person = {name: "ishu"}; // object
let colors = ["red","green","blue"]; // array
function greet() {          // function
  return "Hello!";
}

// Use typeof to check their types
console.log("Type of Name:", typeof Name);       // string
console.log("Type of age:", typeof age);         // number
console.log("Type of isStudent:", typeof isStudent); // boolean
console.log("Type of job:", typeof job);         // undefined
console.log("Type of city:", typeof city);       // object (JS quirk)
console.log("Type of person:", typeof person);   // object
console.log("Type of colors:", typeof colors);   // object
console.log("Type of greet:", typeof greet);     // function
