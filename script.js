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
