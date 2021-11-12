import './App.css';
import React from 'react';
import Board from './Components/Board';

export type AppState = {
	squares: boolean[];
}

class App extends React.PureComponent<{}, AppState> {

  state: AppState = {
		squares: Array(25).fill(false)
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
