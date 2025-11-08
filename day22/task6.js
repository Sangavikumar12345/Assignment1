class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }
}

const product1 = new Product("Phone", 1000);
console.log("Discounted Price:", product1.discountedPrice(10)); 
