function doTask(callback) {
  setTimeout(callback, 3000); 
}

function taskCompleted() {
  console.log("Task Completed");
}
doTask(taskCompleted);
