/*
1. Create a board of soe height and width.
2. Create a food item.
3. Create a snake.
4. Add the foodItem to snake when both collides.
5. Game over when snake hits the boundary or bite itself.
*/

const blockSize = 25,
  rows = 16,
  cols = 16;
let boardContext;

let timer;

let board = document.getElementById("board");
let scoreBoard = document.getElementById("score");
let food = {};
let snakeHead = { X: blockSize * 5, Y: blockSize * 6 };
let snakeBody = [];
let velocity = { X: 0, Y: 0 };
let currentScore = 0;

function createBoard() {
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  board.style.border = "5px solid coral";
  boardContext = board.getContext("2d");
}

function createFoodItem() {
  const X = Math.floor(Math.random() * cols) * blockSize;
  const Y = Math.floor(Math.random() * rows) * blockSize;
  return { X, Y };
}

function gameOver() {
  if (
    snakeHead.X > cols * blockSize ||
    snakeHead.X < 0 ||
    snakeHead.Y > rows * blockSize ||
    snakeHead.Y < 0
  )
    return true;

  return false;
}

function updateScore() {
  currentScore++;
  scoreBoard.innerHTML = `Score : ${currentScore}`;
}

function updateBoardToDOM() {
  if (gameOver()) {
    clearInterval(timer);
    alert("Game over");
    window.location.reload();
  }

  boardContext.fillStyle = "black";
  boardContext.fillRect(0, 0, board.width, board.height);

  boardContext.fillStyle = "red";
  boardContext.fillRect(food.X, food.Y, blockSize, blockSize);

  if (snakeHead.X === food.X && snakeHead.Y === food.Y) {
    snakeBody.push({ X: food.X, Y: food.Y });

    console.log("snakeBody", snakeBody);
    updateScore();
    food = createFoodItem();
  }

  // Arrange the body of snake
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = { X: snakeHead.X, Y: snakeHead.Y };
  }

  // Print Snake to the board
  boardContext.fillStyle = "blue";
  snakeHead.X += velocity.X * blockSize;
  snakeHead.Y += velocity.Y * blockSize;
  boardContext.fillRect(snakeHead.X, snakeHead.Y, blockSize, blockSize);

  for (let i = 0; i < snakeBody.length; i++) {
    /* console.log(snakeBody[i].X) */
    boardContext.fillRect(snakeBody[i].X, snakeBody[i].Y, blockSize, blockSize);
  }
}

function moveSnake(e) {
  if (e.code === "ArrowUp" && velocity.Y != 1) {
    velocity.X = 0;
    velocity.Y = -1;
  } else if (e.code === "ArrowDown" && velocity.Y != -1) {
    velocity.X = 0;
    velocity.Y = 1;
  } else if (e.code === "ArrowLeft" && velocity.X != 1) {
    velocity.X = -1;
    velocity.Y = 0;
  } else if (e.code === "ArrowRight" && velocity.X != -1) {
    velocity.X = 1;
    velocity.Y = 0;
  }
}

function main() {
  createBoard();
  updateBoardToDOM();
  food = createFoodItem();
  document.addEventListener("keyup", moveSnake);
  timer = setInterval(updateBoardToDOM, 1000 / 10);
}

main();
