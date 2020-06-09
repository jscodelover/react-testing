import * as React from 'react';
import './App.css';
import Success from './Success';
import GuessWordTable from './GuessWordTable';
import Input from './Input';

class Jotto extends React.Component {
	render() {
		return (
			<div className="App">
				<Success success={true} />
				<GuessWordTable
					guessWords={[
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
					]}
				/>
				<Input />
			</div>
		);
	}
}

export default Jotto;
