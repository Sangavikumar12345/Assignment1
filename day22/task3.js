function getBook() {
  return {
    title: "1984",
    author: "George Orwell",
    year: 1949
  };
}

const { title, author } = getBook();

console.log(title);  
console.log(author); 
