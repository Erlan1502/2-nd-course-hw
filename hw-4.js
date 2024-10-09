//1
for (let i = 0; i < 2; i++) {
  console.log("Привет");
}
//2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//3
let i = 7;
while (i <= 22) {
  console.log(i);
  i++;
}
//4
const salary = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let k in salary) {
  console.log(`${k}:${salary[k]}`);
}
//5
let n = 1000;
let count = 0;
while (n > 50) {
  n = n / 2;
  count++;
}
console.log(
  "Итоговое число :" + `${n}` + "\nКоличество делений :" + `${count}`
);
//6 изм*
let friday = Math.round(Math.random() * 7);

for (friday; friday <= 31; friday += 7) {
  console.log(
    "Сегодня пятница, " + friday + "-е число. Необходимо подготовить отчет."
  );
}
//
