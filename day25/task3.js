function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative.");
  }
  return "Number is valid.";
}
try {
  console.log(checkNumber(-5));
} catch (e) {
  console.log("Error:", e.message);
}
