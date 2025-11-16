function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(11, 12, 13));       
console.log(sumAll(5, 10, 15, 20)); 
console.log(sumAll());               
