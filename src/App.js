import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import GridCell from './GridCell';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: 'red', //current colour (could also be black but red right now)
      board: [  //the board is an array of columns 
        [], 
        [], 
        [], 
        [], 
        [], 
        [], 
        [], 
      ],
    };
  }

  togglePlayerTurn = (player: Player) => {
    return this.state.current === 'red' ? 'black' : 'red';
  };

  sendTileDrop(column) {
    console.log("drop tile in column " + column);
    const tile = this.state.current;
    const col = this.state.board[column].concat(tile); //adds a red or black to the end of array 
    const newBoard = this.state.board.slice();  
    newBoard[column] = col;
    this.setState({
      board: newBoard,
      current: this.togglePlayerTurn(this.state.current),
    });
  }

  render() {
    console.log('App render')
    const cells = [];

    //all elements of a row in container
    for (let y = 5; y >= 0; y--) {
      const row = [];
      for (let x = 0; x < 7; x++) {
        row.push(<GridCell key={x} x={x} board={this.state.board} y={y} onClick={this.sendTileDrop.bind(this)} />);
      }
      cells.push(<div className="row" key={y}>{row}</div>)
    }

    return (
      <div className="App" >
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" />
        <div className="board">{cells}</div>
      </div>
    );
  }

}

export default App;