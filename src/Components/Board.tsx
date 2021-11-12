import React, { useState } from 'react';

const SIZE = 5

function Board() {

    const [Squares, setSquares] = useState(Array(SIZE * SIZE).fill(false));
    const numsss = Array.from(Array(SIZE).keys());

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
      return (<button className={Squares[i] ? "squareFull" : "squareEmpty"} onClick={() => Ripple(i)} />);
    }

    return (
        <div>
          {numsss.map((i) => <div className="board-row">{numsss.map((j) => renderSquare(j + SIZE*i))}</div>)}
        </div>
      );
}

export default Board;