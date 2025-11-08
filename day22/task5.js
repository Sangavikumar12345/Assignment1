class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: $${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: $${this.salary}, Department: ${this.department}`);
  }
}

const manager1 = new Manager("varshini", 80000, "Sales");
manager1.displayInfo(); 
