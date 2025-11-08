class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5);
console.log("Area of Circle:", c1.area());
