import * as React from 'react';
import PropTypes from 'prop-types';

function GuessWordTable(props) {
	const { guessWords } = props;
	return (
		<div data-test="guess-words-comp">
			{!guessWords.length ? (
				<div data-test="hint-message">Guess the Secret word</div>
			) : (
				<div data-test="guess-words-table">
					<table>
						<tr>
							<th>Guess Word</th>
							<th>Letter Matched</th>
						</tr>
						{guessWords.map(word => (
							<tr data-test="guess-word" key={word.guessWord}>
								<td>{word.guessWord}</td>
								<td>{word.letterMatched}</td>
							</tr>
						))}
					</table>
				</div>
			)}
		</div>
	);
}

GuessWordTable.propTypes = {
	guessWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessWord: PropTypes.string,
			letterMatched: PropTypes.number
		})
	).isRequired
};

export default GuessWordTable;
