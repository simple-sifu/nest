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

// can return null or undefined
const logger = (message: string): void => {
  console.log(message);
}

// this is very rare.
const throwError = (message: string): never => {
  throw new Error(message);
}

// return string becoz their is only a slight chance
// it will return nothing
const throwError0 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
}

const throwError1 = (message: string): void => {
  if (!message){
    throw new Error(message);
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// const logWeather = (forecast: { date: Date, weather: string}) => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// ES2015
// const logWeather = ({date, weather}) => {
//   console.log(date);
//   console.log(weather);
// }


const logWeather = ({
  date, 
  weather
}: { 
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
