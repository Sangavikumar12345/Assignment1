class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: $${this.salary}`);
  }
}
const emp1 = new Employee("nishaa", 50000);
emp1.displayInfo(); 
