"use.strict";
function getMax(arr) {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}
let nums = [];
for (let index = 0; index < 5; index++) {
  let num = Number(prompt("Add number"));
  nums.push(num);
}
console.log(nums);
alert(getMax(nums));
