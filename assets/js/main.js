// Variable
var name = "John"; // can be redeclared and reassigned
let age = 20; // can be reassigned but not redeclared
const isStudent = true; // can't be reassigned or redeclared

var name = "Jane";
age = 21;

console.log("Name: ", name, "Age: ", age, "Is Student: ", isStudent);

/*
 Data Types:
String, 
Number,
Float, 
Boolean, 
Null, 
Undefined, 
Object, 
Symbol, 
Array, 
Function 
*/

console.log("String: ", "Hello World ");
console.log("Number: ", 10); // Int, Integer
console.log("Float: ", 10.5);
console.log("Boolean: ", true);
console.log("Null: ", null);
console.log("Undefined: ", undefined);
console.log("Object: ", { name: "john" });
console.log("Array: ", [1, 2, 3, 4, 5]); // An Array can also contain Keys and Values
console.log("Function: ", function () {
  console.log("Hello World");
});

//Multi Dimensional Array
//Array of Objects
const arrayTest = [
  {
    id: 1,
    name: "john",
    age: 20,
    scores: [
      { subject: "math", score: 100 },
      { subject: "english", score: 90 },
      { subject: "science", score: 80 },
    ],
  },
  {
    id: 2,
    name: "jane",
    age: 21,
    scores: [
      { subject: "math", score: 90 },
      { subject: "english", score: 80 },
      { subject: "science", score: 70 },
    ],
  },
  {
    id: 3,
    name: "jim",
    age: 22,
    scores: [
      { subject: "math", score: 80 },
      { subject: "english", score: 70 },
      { subject: "science", score: 60 },
    ],
  },
];

console.log("Multi Dimensional Array: ", arrayTest[0].scores[2].subject);

//Operators
//Arithmetic Operators +, -, *, /, %, ^, sqrt, cbrt
console.log("Arithmetic Operators +: ", 10 + 10); // Addition
console.log("Arithmetic Operators -: ", 10 - 10); // Subtraction
console.log("Arithmetic Operators *: ", 10 * 10); // Multiplication
console.log("Arithmetic Operators /: ", 10 / 10); // Division
console.log("Arithmetic Operators %: ", 10 % 10); // Modulus
console.log("Arithmetic Operators ^: ", 10 ^ 10); // Exponentiation
console.log("Arithmetic Operators sqrt: ", Math.sqrt(10)); // Square Root
console.log("Arithmetic Operators cbrt: ", Math.cbrt(10)); // Cube Root
console.log("Arithmetic Operators pow: ", Math.pow(10, 10)); // Power

//conditional Operators
console.log("Conditional Operators >: ", 10 > 10); // Greater than
console.log("Conditional Operators <: ", 10 < 10); // Less than
console.log("Conditional Operators >=: ", 10 >= 10); // Greater than or equal to
console.log("Conditional Operators <=: ", 10 <= 10); // Less than or equal to
console.log("Conditional Operators ==: ", 10 == 10); // Equal to
console.log("Conditional Operators !=: ", 10 != 10); // Not equal to
console.log("Conditional Operators ===: ", 10 === 10); // Strict equal to


//assignment Operators
var a2 = ""
console.log("Assignment Operators +=: ", a2 += 10); // Add and assign
console.log("Assignment Operators -=: ", a2 -= 10); // Subtract and assign
console.log("Assignment Operators *: ", a2 *= 10); // Multiply and assign
console.log("Assignment Operators /: ", a2 /= 10); // Divide and assign
console.log("Assignment Operators %: ", a2 %= 10); // Modulus and assign
console.log("Assignment Operators ^: ", a2 ^= 10); // Exponentiation and assign
console.log("Assignment Operators **: ", a2 **= 10); // Power and assign
console.log("Assignment Operators =: ", a2 = 10); // Assign


console.log(1===2) // output 2 -> false
console.log(1==2) // output 2 -> false
console.log(a2=2) // output 2 -> 2


//functions 
// a block of resusable codes.
 function welcomeAllMessage(){
// block of codes
 return "welcome to today's class" //string
 }
 function welcomeUserMessage(userName){
    // block of codes
     return "welcome to today's class: " + userName //string
     }
 //arrow functions 
 const greetingRegular =()=>{
    const welcomeAllMessage = welcomeAllMessage();

    console.log(welcomeAllMessage);

    return welcomeAllMessage;
 }

 const generalGreetings= ()=>{
    const messgae = greetingRegular();
    console.log(messgae);
 }

 const login = ()=>{
  const userInfo = {"userName": "Princess",   "passWord":"1234567890"} 
  const suucessLogin = welcomeUserMessage(userInfo.userName)
  console.log(suucessLogin)
 }

login();

// assuming a2 = 20, then
function basicMath(a2){
console.log("Assignment Operators +=: ", a2 += 10); // 30
console.log("Assignment Operators -=: ", a2 -= 10); // 20
console.log("Assignment Operators *: ", a2 *= 10); // 200
console.log("Assignment Operators /: ", a2 /= 10); // 20
console.log("Assignment Operators %: ", a2 %= 10); // 0
console.log("Assignment Operators ^: ", a2 ^= 10); // Princess = 1, Chris = 0
console.log("Assignment Operators **: ", a2 **= 10); // Princess = 1, Chris = 0
console.log("Assignment Operators =: ", a2 = 10); // 10

const randNumeber = Math.random(9999)
console.log(1===2) // output 2 -> false
console.log(1==2) // output 2 -> false
console.log(a2= Number(a2 * randNumeber).toFixed(2)) // 2
}

basicMath(10);




// Conditional Statement

// if statement
// if else statement
// switch case
// ternary statements

//true or false

const number = 10; 

if (number === 10) {

  console.log("number is: ", number);
  //block of code
}
else if (number === 11) {
  console.log("this number greater by 1 from: ", number);
}
else {
  console.log("this number is not ", number);

}

console.log(number === 10 ? "number is: "+ number : "this number is not"+ number);

switch (number) {
  case number === 10:
  console.log("this number greater by 1 from: ", number);
    break;
  case number === 11:
  console.log("this number greater by 1 from: ", number);
        break;
  default:
  console.log("this number is not: ", number);
    break;
}


