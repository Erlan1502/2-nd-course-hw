//1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let item of arr1) {
  //  console.log(item); proverka
  if (item === 10) {
    break;
  }
}

//2
let positionOfFour = arr1.indexOf(4);
// console.log(positionOfFour); proverka

//3
const arr2 = [1, 3, 5, 10, 20];
let newStringWithNumbers = arr2.join(" ");
// console.log(newStringWithNumbers); proverka

//4
const arr3 = [];
for (let i = 0; i < 3; i++) {
  const secondDimensionArray = [];
  arr3.push(secondDimensionArray);
  for (let j = 0; j < 3; j++) {
    secondDimensionArray.push(j);
  }
}
// console.log(arr3); proverka

//5
const arr4 = [1, 1, 1];
let addedElement = 2;
for (let i = 0; i < 3; i++) {
  arr4.push(2);
}
// console.log(arr4);

//6
const arr5 = [9, 8, 7, "a", 6, 5];
arr5.sort().pop();
// console.log(arr5);

//7
// let guessingNumber = Number(prompt("Угадай число в массиве?"));
// if (arr5.includes(guessingNumber)) {
//   alert("Угадал!");
// } else {
//   alert("Не угадал.");
// }

//8
let textToParse = "abcdef";
const arr6 = textToParse.split("");
const reversedArr6 = arr6.reverse();
console.log(reversedArr6);

//9
const arr7 = [
  [1, 2, 3],
  [4, 5, 6],
];
const unpackedArray = [];
for (let innerArray of arr7) {
  for (let element of innerArray) {
    unpackedArray.push(element);
  }
}
console.log(unpackedArray);
//10
const arrRandomized = [1, 2, 3, 8, 7, 6, 4, 5, 9];
let sumIteration = 0;
for (let item of arrRandomized) {
  sumIteration = sumIteration + item;
  console.log(`${sumIteration}`);
}

//11
function squaredArray(arrToSquare) {
  return arrToSquare.map((item) => (item *= item));
}
// console.log(squaredArray(arrRandomized));

//12
function stringToLengthArray(arrToLength) {
  return arrToLength.map((item) => item.length);
}
// console.log(stringToLengthArray(reversedArr6));

//13
arr8 = [-1, -2, 5, -10, 6, 7, 3, -9];
function filterOnlyNegativeNumbers(arr) {
  return arr.filter((item) => item < 0);
}
// console.log(filterOnlyNegativeNumbers(arr8));

//14
const generatedArray = [];
const evenArrayFromGenerated = [];
for (let i = 0; i < 10; i++) {
  let generatedNumber = Math.round(Math.random() * 10);
  generatedArray.push(generatedNumber);
  if (generatedNumber % 2 === 0) {
    evenArrayFromGenerated.push(generatedNumber);
  }
}
console.log(
  `GENERATED : ${generatedArray}` + "\n" + `EVEN :  ${evenArrayFromGenerated}`
);

//15
const generatedArray2 = [];
for (let i = 0; i < 6; i++) {
  let generatedNumber2 = Math.round(Math.random() * 10);
  generatedArray2.push(generatedNumber2);
}

let summOfGenerated = generatedArray2.reduce(
  (accumulator, current) => accumulator + current,
  0
);
alert(summOfGenerated);
