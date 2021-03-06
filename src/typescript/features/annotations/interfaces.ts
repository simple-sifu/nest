const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

// printVehicle(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

// printVehicle1(oldCivic);

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
}
printVehicle2(oldCivic);


interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic);

const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

printSummary(drink1);

