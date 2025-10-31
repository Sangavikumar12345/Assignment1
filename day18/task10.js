
const correctUsername = "user123";
const correctPassword = "pass123";
const username = "user123";  
const password = "pass123"; 


if (username === correctUsername) {
    if (password === correctPassword) {
        console.log("Login successful!");
    } else {
        console.log("Wrong password!");
    }
} else {
    console.log("Username not found!");
}
