function sumNum(number1, number2) {
  const sum = number1 + number2;
  const randNumb = Math.random(1000);
  const ans = sum * randNumb;
  return ans;
}

function conditions(num) {
  if (num > 10) {
    return "Number is bigger than 10";
  } else if (num < 10) {
    return "Number is lesser than 10";
  } else {
    return "invalid number";
  }
}

const main=(num1, num2)=>{
  const sum = sumNum(num1, num2);
  const testCondition = conditions(sum);
  return testCondition;
}

const runIndex = main(12.32, 20.33)

// console.log(runIndex)

// Loops

// for 
//while
//foreach
//map

// for ( declaration ; condition ; increment or decrement )
const data = [10, 20, 30, 0, 45, 80, 30, 59, 20, 12]

// for(let i=0;  i<data.length; i++){

//   console.log("data"+(i+1), data[i])

// }

// data.forEach((dat,i) => {
//   console.log("data"+(i+1), dat)
// });

// data.map((dat,i) => {
//   console.log("data"+(i+1), dat)
// })


//formular

// mean summation of array divided by the lenght of the array


let summ = 0

for(let i=0;  i<data.length; i++){
  summ += data[i]
}

const mean = summ / data.length

console.log("Our Mean: ", mean)

// median lenght of array divided by 2
// mode count 


