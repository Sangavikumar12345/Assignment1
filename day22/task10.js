class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const s1 = new Student("vijaya", 20);
const s2 = new Student("divya", 21);

Student.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

s1.greet();
s2.greet();
