import React, { useState } from 'react';


function Board() {

    const [SIZE, setSIZE] = useState(3);
    const [Squares, setSquares] = useState(Array(SIZE * SIZE).fill(false));
    const [SquaresClass, setSquaresClass] = useState(Array(SIZE * SIZE).fill("squareEmpty"));
    var looper = Array.from(Array(SIZE).keys());

    const updateBoard = (i: number) => {
      if (i > 2) setSIZE(i);
      setSquares(Array(SIZE * SIZE).fill(false));
      setSquaresClass(Array(SIZE * SIZE).fill("squareEmpty"));
      looper = Array.from(Array(SIZE).keys());
    }

    const Ripple = (i: number) => {
      var tempSquares = Squares.concat();
      var tempSquaresClass = SquaresClass.concat();
      var indexes = [ i-SIZE-1, i-SIZE, i-SIZE+1, i+1, i+SIZE+1, i+SIZE, i+SIZE-1, i-1];
      var winningBoard = Array(SIZE * SIZE).fill(true);

      indexes.map((index) => {
        if (!(index < 0) && !(index > SIZE * SIZE) && (Math.abs(index%SIZE-i%SIZE) < 2)) {
          tempSquares[index] = !tempSquares[index];
          if (tempSquares[index]) tempSquaresClass[index] = "squareFull";
          else tempSquaresClass[index] = "squareEmpty";
        }
        return tempSquares;
      });

      setSquares(tempSquares);
      setSquaresClass(tempSquaresClass);
      if (tempSquares === winningBoard) winSequence();
    }

    const winSequence = async () => {
      var winSquares = Array(SIZE * SIZE).fill("squareWon");
      await timeout(100);
      setSquaresClass(winSquares);
      await timeout(500);
      updateBoard(SIZE);
    }
    function timeout(delay: number) {return new Promise( res => setTimeout(res, delay) );}

    const renderSquare = (i: number) => {
      return (<button className={SquaresClass[i]} onClick={() => Ripple(i)}/>);
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