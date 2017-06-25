import React from 'react';

class History extends React.Component{

	renderStep(move, desc){
		return(
		<li key={move}>
			<a href="#" onClick={() => this.props.onClick(move)}>{desc}</a>
		</li>
		);
	}

	render(){
		const moves = this.props.history.map((step, move) => {
							const desc = move ? 'Move #'+move: "Game Start";
							return (
								this.renderStep(move, desc)
							);
						})
		return (
			<div>
				<ol>
					{moves}
				</ol>
			</div>
		);
	}
}

export default History;