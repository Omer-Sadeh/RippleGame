import React, { useState } from 'react';


function Board() {

    const [SIZE, setSIZE] = useState(3);
    const [Squares, setSquares] = useState(Array(SIZE * SIZE).fill(false));
    const [SquaresState, setSquaresState] = useState(Array(SIZE * SIZE).fill(false));
    var looper = Array.from(Array(SIZE).keys());

    const updateBoard = (i: number) => {
      if (i > 2) setSIZE(i);
      setSquares(Array(SIZE * SIZE).fill(false));
      looper = Array.from(Array(SIZE).keys());
    }

    const Ripple = (i: number) => {
      var tempSquares = Squares.concat();
      var indexes = [ i-SIZE-1, i-SIZE, i-SIZE+1, i+1, i+SIZE+1, i+SIZE, i+SIZE-1, i-1];

      indexes.map((index) => {
        if (!(index < 0) && !(index > SIZE * SIZE)) {
          if (Math.abs(index%SIZE-i%SIZE) < 2) tempSquares[index] = !tempSquares[index];
        }
        return tempSquares;
      });

      setSquares(tempSquares);
    }

    const renderSquare = (i: number) => {
      return (<button className={Squares[i] ? "squareFull" : "squareEmpty"} onClick={() => Ripple(i)}/>);
    }

    return (
      <div>
        <button onClick={() => updateBoard(SIZE)}>reset</button>
        <button onClick={() => updateBoard(SIZE + 1)}>more</button>
        <button onClick={() => updateBoard(SIZE - 1)}>less</button>
        {looper.map((i) => <div className="board-row">{looper.map((j) => renderSquare(j + SIZE*i))}</div>)}
      </div>
    );
}

export default Board;