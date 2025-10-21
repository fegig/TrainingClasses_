//what are data types

//primitive data types

//number
let age: number = 20;

//string
let userName: string = "John";

//boolean
let isStudent: boolean = true;

//array

let numbers: number[] = [1, 2, 3, 4, 5];

//object

let user: {name: string, age: number} = {name: "John", age: 20};

//function


interface AddTwoNumbersProps {
  a: number;
  b: number;
  c: 'success' | 'error' | 'warning';
}

const addTwoNumbers = ({a, b, c}: AddTwoNumbersProps): number => {
  return a + b;
}



addTwoNumbers({a: 1, b: 2, c:"success"});




