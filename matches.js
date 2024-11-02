let matches = +prompt("Введіть кількість сірників:");
while (matches <= 0){
  matches = +prompt("Будь ласка, введіть коректне число сірників:");
}

alert("Сірники: " + "|".repeat(matches) + " (" + matches + ")");

while (matches > 0) {
  let playerTaken = +prompt("Скільки сірників ви хочете взяти (1-3)?");
  while (playerTaken < 1 || playerTaken > 3 || playerTaken > matches) {
    playerTaken = +prompt("Будь ласка, введіть коректну кількість сірників (1-3):");
  }
  matches -= playerTaken;
  alert("Сірники: " + "|".repeat(matches) + " (" + matches + ")");
  
  if (matches === 0) {
    alert("Ви виграли!");
    break;
  }

  let computerTaken;
  if (matches % 4 !== 0) {
    computerTaken = matches % 4;
  } else {
    computerTaken = Math.floor(Math.random() * 3) + 1;
  }

  matches -= computerTaken;
  alert(`Комп'ютер взяв ${computerTaken} сірників.`);
  alert("Сірники: " + "|".repeat(matches) + " (" + matches + ")");
  
  if (matches === 0) {
    alert("Комп'ютер виграв!");
    break;
  }
}
