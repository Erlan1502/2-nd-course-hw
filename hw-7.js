//1
let javaScript = "js";
javaScript = javaScript.toUpperCase();
// alert(javaScript); proverka

//2
function returnOnlyFromSecondRow(arr, prefix) {
  let prefixLower = prefix.toLowerCase();
  return arr.filter((s) => s.toLowerCase().startsWith(prefixLower));
}
// const newArray = ["Sun", "Sunshine", "Sunrise", "Black", "Night"];
// let su = "su";
// const newArraySecond = returnOnlyFromSecondRow(newArray, su);
// alert(newArraySecond);

//3
let a = 32.58884;
let aCeiled = Math.ceil(a);
let aRounded = Math.round(a);
let aFloored = Math.floor(a);

//4
const arr2 = [52, 53, 49, 77, 21, 32];
let minOfArr2 = Math.min(...arr2);
let maxOfArr2 = Math.max(...arr2);
// alert(minOfArr2 + "\n" + maxOfArr2);

//5
let randomFromOneToTen = Math.round(Math.random() * 10);
// alert(randomFromOneToTen);

//6
function returnArray(a) {
  const arr3 = [];
  for (let i = 0; i < a / 2; i++) {
    arr3.push(Math.round(Math.random() * a));
  }
  return arr3;
}
// const checkArray = returnArray(7);
// alert(checkArray);

//7
function fromAToBRandom(a, b) {
  let randomNumber = Math.round(Math.random() * Math.abs(a - b) + a);
  return randomNumber;
}
// let c = fromAToBRandom(5, 10);
// alert(c);

//8
console.log(new Date());
//9
let currentDate = new Date();
let secondDate = new Date();
secondDate.setDate(currentDate.getDate() + 73);
console.log(secondDate.toLocaleDateString());

//10
let currentDate2 = new Date();
let options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

let formattedDate = currentDate2.toLocaleDateString("ru-RU", options);
let formattedTime = currentDate2.toLocaleTimeString("ru-RU", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

console.log(`Дата: ${formattedDate}`);
console.log(`Время: ${formattedTime}`);
