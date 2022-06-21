class Point {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
pt.x = 10;
pt.y = 20;

class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        super();
        console.log(this.k);
    }
}

class Point2D {
    x = 10;
    y = 10;
    scale(n: number): void {
        this.x *= n;
        this.y *=n;
    }
}
/*
interface Pingable {
    ping(): void;
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }
   
  class Ball implements Pingable {
//   Class 'Ball' incorrectly implements interface 'Pingable'.
//     Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
      console.log("pong!");
    }
  }
  */

  class Car {
      model: string;
      doors: number;
      isElectric: boolean;

      constructor(model: string, doors: number, isElectric: boolean) {
          this.model = model;
          this.doors = doors;
          this.isElectric = isElectric;
      }
      make(): void {
          console.log(`This car is ${this.model} which has ${this.doors} doors`);
      }
  }
  let newCar = new Car(`Innova`, 4, false);
  newCar.make();