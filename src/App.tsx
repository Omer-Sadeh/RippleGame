import './App.css';
import React from 'react';
import Board from './Components/Board';

export type AppState = {
	squares: boolean[];
}

class App extends React.PureComponent<{}, AppState> {

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
