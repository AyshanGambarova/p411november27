"use.strict"
function Factorial(num) {
  let result = 1;
  for (let index = 1; index <= num; index++) {
    result=result*index;
  }
  return result;
}
let number=Number(prompt("Enter a number: "));
alert(Factorial(number));
console.log(Factorial(number));