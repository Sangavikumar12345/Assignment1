// String
let Name = "sangee";

// Number
let age = 25;

// Boolean
let isStudent = true;

// Undefined
let job;

// Null
let city = null;

// Object
let person = { name: "sara", age: 20 };

// Array
let colors = ["red", "green", "blue"];

// Function
function greet() {
  return "Hello!";
}

// Log types to console
console.log(typeof Name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent); // boolean
console.log(typeof job);      // undefined
console.log(typeof city);     // object (this is a known JS quirk)
console.log(typeof person);   // object
console.log(typeof colors);   // object (arrays are objects in JS)
console.log(typeof greet);    // function
