// annotations are needed if array is populated.
const carMakers = ['ford', 'toyota', ' chevy']
const dates = [new Date(), new Date()];

const carMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

const carsByMake1: string[][] = [];

carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible Types
const importantDates = [new Date(), "2030-10-10"];
const importantDate: (string | Date)[] = [new Date()];
importantDate.push("test");  