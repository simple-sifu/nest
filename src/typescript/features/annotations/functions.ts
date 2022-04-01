// even though we have type inference we will
// always use type annotations because if we
// forget return it will think we want to return void 

const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
}