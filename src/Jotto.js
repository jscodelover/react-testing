import * as React from 'react';
import './App.css';
import Success from './Success';
import GuessWordTable from './GuessWordTable';

class Jotto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			successMsg: true,
			guessWords: [
				{
					guessWord: 'lucky',
					letterMatched: 1
				},
				{
					guessWord: 'trick',
					letterMatched: 2
				},
				{
					guessWord: 'party',
					letterMatched: 5
				}
			]
		};
	}
	render() {
		const { successMsg, guessWords } = this.state;
		return (
			<div className="App">
				<Success success={successMsg} />
				<GuessWordTable guessWords={guessWords} />
			</div>
		);
	}
}

export default Jotto;
