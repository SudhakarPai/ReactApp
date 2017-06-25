import React from 'react';
import Board from './Board.jsx';
import History from './History.jsx';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			history:[
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			isXnext: true
		}
	}

	handleClick(i){
		const history = this.state.history.slice();
		const currentState = history[this.state.stepNumber];
		const squares = currentState.squares.slice();
		if(calculateWinner(squares) || squares[i] 
			|| this.state.stepNumber != history.length - 1){
			return;
		}
		squares[i] = this.state.isXnext?'X':'O';
		const isXnext = !this.state.isXnext;
		const stepNumber = this.state.stepNumber + 1;
		this.setState(
			{
				history: history.concat([
				{
					squares: squares	
				}]),
				stepNumber: stepNumber,
				isXnext: isXnext
			}
		);
	}

	jumpTo(step){
		this.setState(
			{
				stepNumber: step,
				isXnext: (step % 2)?false:true
			}
		);
	}

	render(){
		const currentState = this.state.history[this.state.stepNumber];
		const winner = calculateWinner(currentState.squares);
		let status;
		if(winner){
			status = "Winner !! "+winner;
		}else{
			status = "Next Player: "+(this.state.isXnext?'X':'O');
		}
		return(
		<div>
			<div>
				{status}
			</div>
			<Board squares={currentState.squares}
					isXnext={this.state.isXnext}
					onClick={(i) => this.handleClick(i)}/>
			<History history={this.state.history}
					onClick={(step) => this.jumpTo(step)} />
		</div>
		);
	}
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;