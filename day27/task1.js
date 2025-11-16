//
fetch("https://github.com/Sangavikumar12345/Assignment1.git")
   .then(response => response.json())
   .then(data => {
     console.log("GitHub Profile Data:");
      console.log(data);
   })
   .catch(error => console.log("Error:",error));