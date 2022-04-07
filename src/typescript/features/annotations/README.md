# Tension between Type Annotations and Type Inference

Type Inference - when to use - always

Type Annotations - when to use

1.  When we declare a variable on one line then initialize later
```
let words = ['red', 'green', 'blue'];
let foundWord;

for (let i=0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord = true;
  }
}
```

2.  Function returns the any type and we need to clarify the value.
```
const json = '{"x":10, "y":20}';
let coordinates: {x:number; y:number;} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}`
```    

3.  When we want a variable to have a type that can't be inferred
```    
let numbers = [-10,-1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0){
      numberAboveZero = numbers[i];
  }
}
```
4. How does Typescript help us with Arrays.
```
a. can do Type Inference by extracting values from array.
b. can prevent us from adding incompatible values to the array.
c. will give us autocomplete on parameters passed in when using 'map', 'reduce', 'forEach' function 
d. can contain multiple different types.
```

5. Tuple - Array-like structure where each element represents some property of a record. Values of fixed set of properties are placed in specific order.

6. Interfaces - General strategy for Reusable Code in TS
```
a. create functions that accept arguments that are typed with interfaces. As much as possible.

b. Objects/classes can decide to implement a given interface to work with a function