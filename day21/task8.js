// Create a 2D array of names and marks
const students = [
  ["dhiyash", 85],
  ["varshika", 72],
  ["sashtik", 90],
  ["sashtika", 68]
];

// Use forEach() to print each student's data
students.forEach(student => {
  const [name, mark] = student; // Destructure the array
  console.log(`Name: ${name}, Mark: ${mark}`);
});
