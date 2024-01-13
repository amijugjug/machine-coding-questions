import { useState } from "react";
import "./TicTacToe.css";

const Square = ({ value, handleClick }) => {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

const Board = ({ calculateWinner, setWinner, state, setState }) => {
  const [chance, setChance] = useState("X");

  const handleClick = (i) => {
    if (state[i] || calculateWinner(state)) return;

    const _state = state.slice();
    _state[i] = chance;
    setChance(chance === "X" ? "0" : "X");
    setState(_state);
  };
  const findWinner = calculateWinner(state);
  if (findWinner) {
    setWinner(`Winner : ${findWinner}`);
  }
  if (!state.includes(null)) {
    setWinner(`Game draw`);
  }
  return (
    <div className="board">
      <div className="board-line">
        <Square value={state[0]} handleClick={() => handleClick(0)} />
        <Square value={state[1]} handleClick={() => handleClick(1)} />
        <Square value={state[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-line">
        <Square value={state[3]} handleClick={() => handleClick(3)} />
        <Square value={state[4]} handleClick={() => handleClick(4)} />
        <Square value={state[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-line">
        <Square value={state[6]} handleClick={() => handleClick(6)} />
        <Square value={state[7]} handleClick={() => handleClick(7)} />
        <Square value={state[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export const TicTacToe = () => {
  const [winner, setWinner] = useState("");
  const [state, setState] = useState(Array(9).fill(null));

  const calculateWinner = (squares) => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winArr.length; i++) {
      const [a, b, c] = winArr[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];
    }
    return null;
  };

  const resetGame = () => {
    const _state = Array(9).fill(null);
    setState(_state);
    setWinner("");
  };

  return (
    <div className="game">
      <div className="controls">
        <label className="label">{winner}</label>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <Board
        calculateWinner={calculateWinner}
        setWinner={setWinner}
        state={state}
        setState={setState}
      />
    </div>
  );
};
