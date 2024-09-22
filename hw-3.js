//1
let password = "1q2w3e4r";
let inputPassword = prompt("Введите пароль");
if (inputPassword === password) {
  alert("Пароль введен верно.");
} else {
  alert("Пароль введен неправильно");
}
//2
let c = prompt("Введите число", 0);
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
//3
let d = prompt("Введите 1oe число", 0);
let e = prompt("Введите 2oe число", 0);
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
//4
let a = "2";
let b = "3";
alert(Number(a) + Number(b));
//5
let monthNumber = Number(prompt("Введите месяц", 1));
while (monthNumber > 13 || monthNumber < 1 || isNaN(monthNumber)) {
  monthNumber = prompt("Такого месяца не существует, введите еще раз", 1);
}
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
}
