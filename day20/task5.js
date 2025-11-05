function getUserName(callback) {
  let name = "Sangavi kumar"; 
  callback(name);
}

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

getUserName(greetUser);
