class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const s1 = new Student("hansitaa", 25);
const s2 = new Student("aarthy", 21);
const s3 = new Student("keerthi", 22);

s1.display();
s2.display();
s3.display();
