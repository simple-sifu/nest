const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehicle(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehicle1(oldCivic);