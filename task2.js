"use.strict";
let num = Number(prompt("Enter a number: "));
let dividers = [];
for (let index = 1; index <= num; index++) {
  if (num % index == 0) {
    dividers.push(index);
  }
}
alert("Dividers:" + dividers);
