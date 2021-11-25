"use.strict"
let number = Number(prompt("Enter the number between 1 and 4 :"));
if (number > 4) {
  alert("Invalid");
} else {
  switch (number) {
    case 1:
      alert("Winter");
      break;
    case 2:
      alert("Spring");
      break;
    case 3:
      alert("Summer");
      break;
    case 4:
      alert("Autumn");
      break;

    default:
      break;
  }
}
