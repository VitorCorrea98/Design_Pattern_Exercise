interface RouteCalculationStrategy {
  calculate(): string;
}

class FastestRoute implements RouteCalculationStrategy {
  calculate() {
    return "Fastest Route";
  }
}

class CheapestRoute implements RouteCalculationStrategy {
  calculate() {
    return "Chepeast Route";
  }
}

class Route {

  constructor(private calculateBehavior: RouteCalculationStrategy) {
  }

  performRoute() {
    return this.calculateBehavior.calculate();
  }

  setCalculateBehavior(calculateBehavior: RouteCalculationStrategy) {
    this.calculateBehavior = calculateBehavior;
  }
}

const fastestRoute = new FastestRoute();
const cheapestRoute = new CheapestRoute();

const route = new Route(fastestRoute);
console.log(route.performRoute()); // Fastest Route

route.setCalculateBehavior(cheapestRoute);
console.log(route.performRoute()); // Chepeast Route