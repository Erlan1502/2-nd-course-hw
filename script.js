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
  let expression = Math.random() * 100;
  let symbol;
  let number1 = Math.round(Math.random() * 100);
  let number2 = Math.round(Math.random() * 100);
  if (expression <= 25) {
    symbol = `+`;
    rightAnswer = number1 + number2;
  } else if (expression > 25 && expression <= 50) {
    symbol = `-`;
    rightAnswer = number1 - number2;
  } else if (expression > 50 && expression <= 75) {
    symbol = `*`;
    rightAnswer = number1 * number2;
  } else if (expression > 75 && expression <= 100) {
    symbol = `/`;
    rightAnswer = number1 / number2;
  }
  let userAnswer = prompt(
    "Сколько будет " + `${number1}` + ` ${symbol} ` + `${number2}`
  );
  if (Number(userAnswer) === rightAnswer) {
    alert("Верно!");
  } else {
    alert("Неверно!");
  }
}
