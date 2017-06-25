import React from 'react';
import Square from './Square.jsx';

class Board extends React.Component{

	renderSquare(i){
		return (<Square value={this.props.squares[i]} key={i.toString()}
				onClick={() => this.props.onClick(i)}/>);
	}

	render(){
		const rowRange = [1, 2, 3];
		var i = 0;
		return (
			<div>
			{
				rowRange.map(
					row => <div className="board-row" key={row+"row"}>
							{
								rowRange.map(squareBox => this.renderSquare(i++))
							}
						   </div>
				)
			}
			</div>
		);
	}
}

export default Board;