let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingValue: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,4,5];
let truths: boolean[] = [true, false, true, true];

// Classes
class Car {

}
let car:Car = new Car();

// Object Literal
let point:{x:number; y:number;} = {
  x: 10,
  y: 20
}

// Function
// everything after and on the right side of the equal side is the actual code.

// everything between colon and equal is the type declaration. even though it looks like a function,
// is just a description of a function.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

