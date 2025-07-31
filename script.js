let score1 = 0;
let score2 = 0;
let currentPlayer = 1;

const rollBtn = document.getElementById("rollBtn");
const message = document.getElementById("message");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

function getDiceFace(num) {
  const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  return faces[num - 1];
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

rollBtn.addEventListener("click", () => {
  const roll = rollDice();
  const diceFace = getDiceFace(roll);
  const activePlayer = document.getElementById(`player${currentPlayer}`);
  const nextPlayer = currentPlayer === 1 ? 2 : 1;

  if (currentPlayer === 1) {
    score1 += roll;
    dice1.textContent = diceFace;
    document.getElementById("score1").textContent = score1;
  } else {
    score2 += roll;
    dice2.textContent = diceFace;
    document.getElementById("score2").textContent = score2;
  }

  // Check for winner
  if (score1 >= 50 || score2 >= 50) {
    message.textContent = `🎉 Player ${currentPlayer} Wins! 🎉`;
    rollBtn.disabled = true;
    rollBtn.style.backgroundColor = "#888";
    return;
  }

  // Switch turn
  document.getElementById(`player${currentPlayer}`).classList.remove("active");
  document.getElementById(`player${nextPlayer}`).classList.add("active");
  currentPlayer = nextPlayer;

  message.textContent = `🎲 Player ${currentPlayer}'s turn!`;
});
