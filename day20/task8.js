function doTask(callback) {
  console.log("Doing some task...");
  callback();
}

function taskComplete() {
  console.log("Task Complete");
}

doTask(taskComplete);
