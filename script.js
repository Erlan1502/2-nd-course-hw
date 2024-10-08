function tryToGuessNumber() {
  let correctNumber = Math.round(Math.random() * 100);
  let guessingNumber = prompt(
    "Попробуйте угадать загаданное число от 0 до 100"
  );
  if (guessingNumber === null) {
    alert("Вы отменили игру!");
    return;
  }
  checkingNumber();
  while (Number(guessingNumber) !== correctNumber) {
    if (Number(guessingNumber) < correctNumber) {
      alert("Корректное число больше чем указанное вами, попробуйте ещё раз!");
    } else if (Number(guessingNumber) > correctNumber) {
      alert("Корректное число меньше чем указанное вами, попробуйте ещё раз!");
    }
    guessingNumber = prompt("Введите ЧИСЛО от 0 до 100");
    if (guessingNumber === null) {
      alert("Вы отменили игру!");
      return;
    }
    checkingNumber();
  }

  alert("Поздравляю! Вы угадали это именно номер " + correctNumber + "!");

  function checkingNumber() {
    while (isNaN(Number(guessingNumber))) {
      guessingNumber = prompt("Введите ЧИСЛО от 0 до 100");
      if (guessingNumber === null) {
        alert("Вы отменили игру!");
        return;
      }
    }
  }
}

function simpleArythmetics() {
  let rightAnswer;
  let expression = Math.random() * 4;
  let symbol;
  let number1 = Math.round(Math.random() * 100);
  let number2 = Math.round(Math.random() * 100);
  if (expression <= 1) {
    symbol = `+`;
    rightAnswer = number1 + number2;
  } else if (expression > 1 && expression <= 2) {
    symbol = `-`;
    rightAnswer = number1 - number2;
  } else if (expression > 2 && expression <= 3) {
    symbol = `*`;
    rightAnswer = number1 * number2;
  } else if (expression > 3 && expression <= 4) {
    symbol = `/`;
    rightAnswer = Math.round((number1 / number2) * 100) / 100;
  }
  let userAnswer;
  if (symbol === `/`) {
    userAnswer = prompt(
      "Сколько будет " +
        `${number1}` +
        ` ${symbol} ` +
        `${number2}` +
        " Ответ запиши до сотых в большую сторону. \nПример: 7/4 = 1.75"
    );
  } else {
    userAnswer = prompt(
      "Сколько будет " + `${number1}` + ` ${symbol} ` + `${number2}`
    );
  }
  if (Number(userAnswer) === rightAnswer) {
    alert("Верно!");
  } else {
    alert("Неверно! Правильный ответ: " + `${rightAnswer}`);
  }
}
