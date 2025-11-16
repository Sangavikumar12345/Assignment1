function createAsyncCounter() {
  let count = 0;
  return function increment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        count++;
        resolve(`Counter updated: ${count}`);
      }, 1000); 
    });
  };
}

const counter = createAsyncCounter();

async function runCounter() {
  console.log(await counter()); 
  console.log(await counter()); 
  console.log(await counter()); 
}

runCounter();
