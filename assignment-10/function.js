//To print numbers from 1-100
function printNum() {
  for (let itr = 1; itr <= 100; itr++) {
    console.log(itr);
  }
}
printNum();

//To print Date
function printDate() {
  date = new Date();
  let currDate = String(date.getDate()).padStart(2,'0') + "/" + (String(date.getMonth() + 1).padStart(2,'0')) + "/" + date.getFullYear();
  return currDate;
}
console.log(printDate());

//Celcius to Fahrenheit
function toFahrenheit(celcius) {
  return (celcius * (9 / 5) + 32).toFixed(3);
}
console.log(toFahrenheit(37));

//Find Average
function findAverage(array) {
  // let sum = 0;
  // for (number of array) {
  //   sum += number;
  // }
  // return sum / array.length;
  let avg=array.reduce((a,b)=>a+b);
  return avg/array.length;
}
console.log(findAverage([1, 2, 3, 4, 5, 6]));

//Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
