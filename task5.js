"use.strict";
let amount = Number(prompt("Enter amount: "));
let month = Number(prompt("Enter month: "));
let permonth = amount / month;
let residuePart = permonth % 1;
let sumOfResidue = 0;
for (let index = 1; index <= month; index++) {
  sumOfResidue += residuePart;
  if (index == month) {
    let result = (permonth - residuePart )+ sumOfResidue;
    console.log(index + " ay: ", Number(result.toFixed(0)));
    break;
  }
  console.log(index + " ay: ", permonth - residuePart);
}
