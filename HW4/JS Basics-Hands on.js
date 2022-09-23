// person1
let name1 = "John Doe";
let gender1 = "M";
let h1 = 1.8;
let w1 = 65;
let BMI1 = w1 / (h1 * h1);
let x;
if (BMI1 < 18.5) {
  x = "Underweight";
} else if (BMI1 >= 18.5 && BMI1 < 25) {
  x = "Normal";
} else if (BMI1 >= 25 && BMI1 < 30) {
  x = "Overweight";
} else {
  x = "Obese";
}
console.log(name1, "|", gender1, "|", BMI1, "|", x);
// person2
let name2 = "Mary Ann";
let gender2 = "F";
let h2 = 1.5;
let w2 = 65;
let BMI2 = w2 / (h2 * h2);
let y;
if (BMI2 < 18.5) {
  y = "Underweight";
} else if (BMI2 >= 18.5 && BMI2 < 25) {
  y = "Normal";
} else if (BMI2 >= 25 && BMI2 < 30) {
  y = "Overweight";
} else {
  y = "Obese";
}
console.log(name2, "|", gender2, "|", BMI2, "|", y);
