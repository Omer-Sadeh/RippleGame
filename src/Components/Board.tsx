import React, { useState } from 'react';

const SIZE = 4

function Board() {

    const [Squares, setSquares] = useState(Array(SIZE * SIZE).fill(false));

    const HandleClick = (i: number) => {
      var tempSquares = Squares.concat()
      tempSquares[i] = !tempSquares[i]
      setSquares(tempSquares)
    }

    const Ripple = (i: number) => {
      var tempSquares = Squares.concat()
      var indexes = [ i-SIZE-1, i-SIZE, i-SIZE+1, i+1, i+SIZE+1, i+SIZE, i+SIZE-1, i-1]

      indexes.map((index) => {
        if (!(index < 0) && !(index > SIZE * SIZE)) {
          if (Math.abs(index%4-i%4) < 2) tempSquares[index] = !tempSquares[index]
        }
        return tempSquares
      })

      setSquares(tempSquares)
    }

    const renderSquare = (i: number) => {
      return (<button className={Squares[i] ? "squareFull" : "squareEmpty"} onClick={() => Ripple(i)} />);
    }

    return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
          </div>
          <div className="board-row">
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
          </div>
          <div className="board-row">
            {renderSquare(8)}
            {renderSquare(9)}
            {renderSquare(10)}
            {renderSquare(11)}
          </div>
          <div className="board-row">
            {renderSquare(12)}
            {renderSquare(13)}
            {renderSquare(14)}
            {renderSquare(15)}
          </div>
        </div>
      );
}

export default Board;