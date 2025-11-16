try {
  let num = 10;
  console.log(num + x);
} catch (e) {
  console.log("ReferenceError caught!");
} finally {
  console.log("Code executed.");
}
