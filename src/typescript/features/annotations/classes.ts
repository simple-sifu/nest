class Vehicle {
  color: string = 'red';

  drive(): void {
    console.log('chugga chugga')
  }

  honk(): void {
    console.log('honk honk')
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {

}

const car = new Car();
car.drive();
car.honk();


class Car1 extends Vehicle {
   drive(): void {
     console.log('vroom');
   }
}

const car1 = new Car1();
car1.drive();
car1.honk();
console.log("color", car1.color);