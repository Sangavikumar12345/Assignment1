const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const combined1 = arr1.concat(arr2);
console.log("Using concat():", combined1);
const combined2 = [...arr1, ...arr2];
console.log("Using spread syntax:", combined2);
