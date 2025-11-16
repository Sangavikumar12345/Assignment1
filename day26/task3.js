function doTask(callback) {
  setTimeout(() => {
    callback("Task Completed");
  }, 3000);
}


function doTaskPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Task Completed");
      } else {
        reject("Task Failed");
      }
    }, 3000);
  });
}


doTaskPromise()
  .then(result => console.log(result))   
  .catch(error => console.error(error));
