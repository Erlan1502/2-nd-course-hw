//1
function lowerReturn() {
  let a = Number(prompt("Введите первое число", 1));
  while (isNaN(a)) {
    a = prompt("Такого числа не существует, введите первое число ещё раз", 1);
  }
  let b = Number(prompt("Введите первое число", 1));
  while (isNaN(b)) {
    b = prompt("Такого числа не существует, введите первое число ещё раз", 1);
  }
  if (a > b) {
    alert(`${a}` + ">" + `${b}`);
    return b;
  } else if (a < b) {
    alert(`${a}` + "<" + `${b}`);
    return a;
  } else {
    alert(`${a}` + "=" + `${b}`);
    return b;
  }
}
//2
function oddOrEven(a) {
  if (a % 2 == 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}
// let test = prompt("Введите число");
// alert(oddOrEven(test));

//3
function squareAndConsoleLog(a) {
  a = a ** 2;
  console.log(a);
}
function squareAndReturn(a) {
  a = a ** 2;
  return a;
}
// let test = squareAndReturn(4);
// alert(test);

//4
function ageTest() {
  let userAge = Number(prompt("Сколько Вам лет?"));
  while (isNaN(userAge) || userAge < 0) {
    userAge = prompt("Вы ввели неправильное значение!");
  }
  if (userAge <= 12) {
    alert("Привет друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
// ageTest();

//5
function checkNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Одно или оба значения не являются числом");
  } else {
    return a * b;
  }
}
// test = checkNumber(2, 2);
// alert(test);

//6
function numberTest() {
  let a = prompt("Впишите число");
  if (!isNaN(a)) {
    return `${a} ` + "в кубе равняется" + ` ${a ** 3}`;
  } else {
    return "Переданный параметр не является числом";
  }
}
// test = numberTest();
// alert(test);

//7
circle1 = {
  radius: 10,
};
circle2 = {
  radius: 5,
};
function getArea(a) {
  let area = a.radius ** 2 * Math.PI;
  return area;
}
function getPerimeter(a) {
  let area = a.radius * 2 * Math.PI;
  return area;
}
// let areaCirle1 = getArea(circle1);
// alert(areaCirle1);
// let perimeterCircle1 = getPerimeter(circle1);
// alert(perimeterCircle1);
