/* 
1. Make basic html structure
2. Display the grid
3. Generate Random Dice Value
4. Update playerScores with the dice value.
*/

const container = document.getElementById("container");
const player = document.getElementById("player");
const value = document.getElementById("value");
const rollDiceButton = document.getElementById("roll-dice-button");

/* true->player 1, false->player2 */
let toggle = true;
let player1Score = 0;
let player2Score = 0;

const scoreMap = {
  2: 38,
  4: 14,
  8: 30,
  21: 42,
  28: 76,
  32: 10,
  36: 6,
  48: 26,
  50: 67,
  62: 71,
  80: 99,
  88: 24,
  95: 56,
  97: 78,
};

const declareResult = () => {
  if (toggle) {
    alert("Player 1 wins the game");
  } else {
    alert("Player 2 wins the game");
  }

  window.location.reload();
};

const updatePlayerPositionsOnUI = (currentScore, newScore) => {
  console.log("currentScore : ", currentScore, "newScore: ", newScore);
  const currentBox = document.getElementById("" + currentScore);
  if (currentBox) {
    currentBox.innerHTML = "" + currentScore;
    currentBox.style.color = "black";
  }
  const newBox = document.getElementById("" + newScore);
  newBox.innerHTML += toggle ? "P1" : "P2";
  newBox.style.color = toggle ? "red" : "blue";
};

const generateRandomDiceValue = (min = 1, max = 6) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
  value.innerHTML = `Dice Value: ${randomValue}`;
  return randomValue;
};

const updateCurrentPlayer = () => {
  if (toggle) {
    player.innerHTML = `Current Player : player 1`;
  } else {
    player.innerHTML = `Current Player : player 2`;
  }
};

const updateScore = (score) => {
  // player 1
  if (toggle) {
    let newScore = player1Score + score;
    if (newScore === 100) {
      declareResult();
    } else if (newScore > 100) {
      newScore = player1Score;
    } else if (scoreMap[newScore]) {
      newScore = scoreMap[newScore];
    } else {
      newScore = player1Score + score;
    }

    updatePlayerPositionsOnUI(player1Score, newScore);

    player1Score = newScore;
  }
  // player 2
  else {
    let newScore = player2Score + score;
    if (newScore === 100) {
      declareResult();
    } else if (newScore > 100) {
      newScore = player2Score;
    } else if (scoreMap[newScore]) {
      newScore = scoreMap[newScore];
    } else {
      newScore = player2Score + score;
    }

    updatePlayerPositionsOnUI(player2Score, newScore);
    player2Score = newScore;
  }

  console.log("player1 score : ", player1Score);
  console.log("player2 score : ", player2Score);
};

//Roll Dice
const rollDice = () => {
  const currentScore = generateRandomDiceValue(1, 6);
  updateCurrentPlayer(toggle);
  updateScore(currentScore);
  toggle = !toggle;
};

//Make Grid
const makeGrid = () => {
  container.innerHTML = "";
  for (let i = 100; i >= 1; i--) {
    const box = document.createElement("div");
    box.id = i;
    box.textContent = i;
    box.style.border = "1px solid black";
    container.appendChild(box);
  }
};

makeGrid();
rollDiceButton.addEventListener("click", rollDice);
