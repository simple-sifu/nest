const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  // functions inside objects
  setAge(age: number): void {
    this.age = age;
  }
}

// destructuring requires key and value type
const { age, name }: { age: number; name: string } = profile;
const { 
  coords: { lat, lng}
}: { coords: { lat: number, lng: number } } = profile;