import React, { useState } from 'react';


function Board() {

    const [SIZE, setSIZE] = useState(4);
    const [Squares, setSquares] = useState(Array(SIZE * SIZE).fill(false));
    const [SquaresClass, setSquaresClass] = useState(Array(SIZE * SIZE).fill("squareEmpty"));
    const [IndexArray, setIndexArray] = useState(Array.from(Array(SIZE).keys()))

    const updateBoard = (Size: number, newSquares: boolean[]) => {
      var newSize = SIZE
      if (Size > 2) {
        newSize = Size
        setSIZE(newSize);
        setIndexArray(Array.from(Array(newSize).keys()));
        setSquares(newSquares);
        setSquaresClass(ExtractClassArray(newSquares));
      }
      else alert("Cannot create board smaller than 3x3! try again.");
    }

    const ExtractClassArray = (currentArray: boolean[]) => {
      var temp = Array(currentArray.length).fill("squareEmpty");
      for (var i=0; i<currentArray.length; i++) {
        if (currentArray[i]) temp[i] = "squareFull";
      }
      return temp;
    }

    const Ripple = (i: number) => {
      var tempSquares = Squares.concat();
      var indexes = [ i-SIZE-1, i-SIZE, i-SIZE+1, i+1, i+SIZE+1, i+SIZE, i+SIZE-1, i-1];
      var winningBoard = Array(SIZE * SIZE).fill(true);

      indexes.map((index) => {
        if (!(index < 0) && !(index > SIZE * SIZE) && (Math.abs(index%SIZE-i%SIZE) < 2)) tempSquares[index] = !tempSquares[index];
      });

      updateBoard(SIZE, tempSquares);
      if (tempSquares[0]) winSequence();
      if (tempSquares === winningBoard) winSequence();
    }

    const winSequence = async () => {
      var winSquares = Array(SIZE * SIZE).fill("squareWon");
      await timeout(100);
      updateBoard(SIZE, winSquares);
      await timeout(3000);
      updateBoard(SIZE, Array(SIZE * SIZE).fill(false));
    }
    function timeout(delay: number) {return new Promise( res => setTimeout(res, delay) );}

    const renderSquare = (i: number) => {
      return (<button className={SquaresClass[i]} onClick={() => Ripple(i)}/>);
    }

    return (
      <div>
        <button onClick={() => updateBoard(SIZE, Array(SIZE * SIZE).fill(false))}>reset</button>
        <button onClick={() => updateBoard(SIZE + 1, Array((SIZE + 1) * (SIZE + 1)).fill(false))}>more</button>
        <button onClick={() => updateBoard(SIZE - 1, Array((SIZE - 1) * (SIZE - 1)).fill(false))}>less</button>
        {IndexArray.map((i) => <div className="board-row">{IndexArray.map((j) => renderSquare(j + SIZE*i))}</div>)}
      </div>
    );
}

export default Board;
