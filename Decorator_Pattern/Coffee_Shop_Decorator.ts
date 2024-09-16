interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost();
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }
}

class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", with milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 1;
  }

  getDescription(): string {
    return this.coffee.getDescription() + ", with sugar";
  }
}

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription() + " custa $" + coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription() + " custa $" + coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription() + " custa $" + coffee.getCost());
