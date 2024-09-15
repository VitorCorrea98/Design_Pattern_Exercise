export interface Subject {
  removeObserver(o: Observer): void;
  registerObserver(o: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(): string;
  display(): string
}

class StockData implements Subject {
  private observers: Observer[] = [];
  private stockPrice: number = 0;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    this.observers = this.observers.filter(observer => observer !== o);
  }

  notifyObservers() {
    for (const obsever of this.observers) {
      console.log(obsever.update())
    }
  }

  setStockPrice(price: number) {
    this.stockPrice = price;
    this.notifyObservers();
  }

  getStockPrice() {
    return this.stockPrice;
  }
}

class User implements Observer {
  private stockData: StockData;
  private stockPrice: number = 0;
  public name: string;

  constructor(stockData: StockData, name: string) {
    this.stockData = stockData;
    this.name = name;
    this.stockData.registerObserver(this);
  }

  update() {
    this.stockPrice = this.stockData.getStockPrice();
    return this.display()
  }

  display() {
    return `${this.name} has stock price of ${this.stockPrice}`;
  }
}

const stockData = new StockData();
const user1 = new User(stockData, "Jose");
const user2 = new User(stockData, "Maria");

stockData.setStockPrice(100)

stockData.removeObserver(user2);

stockData.setStockPrice(200);

stockData.removeObserver(user1)
stockData.registerObserver(user2);

stockData.setStockPrice(300)


