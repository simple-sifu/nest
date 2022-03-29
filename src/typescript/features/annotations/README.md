# Tension between Type Annotations and Type Inference

Type Inference - when to use - always

Type Annotations - when to use

1.  When we declare a variable on one line then initialize later
    `
        let words = ['red', 'green', 'blue'];
        let foundWord;

        for (let i=0; i < words.length; i++){
          if (words[i] === 'green'){
            foundWord = true;
          }
        }
    `

2.  Function returns the any type and we need to clarify the value.
    `
        const json = '{"x":10, "y":20}';
        let coordinates: {x:number; y:number;} = JSON.parse(json);
        console.log(coordinates); // {x: 10, y: 20}
    `

3.  When we want a variable to have a type that can't be inferred
    `
        let numbers = [-10,-1, 12];
        let numberAboveZero: boolean | number = false;

        for (let i = 0; i < numbers.length; i++){
          if (numbers[i] > 0){
          numberAboveZero = numbers[i];
          }
        }
    `
