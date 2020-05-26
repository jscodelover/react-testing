import * as React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import GuessWordTable from './GuessWordTable';

const defaultProps = {
	guessWords: [
		{
			guessWord: 'lucky',
			letterMatched: 1
		}
	]
};

function getWrapper(props = {}) {
	const compProps = { ...defaultProps, ...props };
	return shallow(<GuessWordTable {...compProps} />);
}
function findTestByAttr(wrapper, validator) {
	return wrapper.find(`[data-test="${validator}"]`);
}

test('check props', () => {
	const checkProps = checkPropTypes(
		// eslint-disable-next-line react/forbid-foreign-prop-types
		GuessWordTable.propTypes,
		{ ...defaultProps },
		'prop',
		GuessWordTable.name
	);
	expect(checkProps).toBeUndefined();
});

describe('render with no guess words', () => {
	let wrapper;
	const guessWords = [];
	beforeAll(() => {
		wrapper = getWrapper({
			guessWords
		});
	});
	test('render component without error', () => {
		const wrapper = findTestByAttr(getWrapper(), 'guess-words-comp');
		expect(wrapper.length).toBe(1);
	});
	test('guess word message', () => {
		const hintMessage = findTestByAttr(wrapper, 'hint-message');
		expect(hintMessage.text()).not.toBeNull();
	});
});

describe('render with guess words', () => {
	let wrapper;
	const guessWords = [
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
	];
	beforeAll(() => {
		wrapper = getWrapper({
			guessWords
		});
	});
	test('render component without error', () => {
		const wrapper = findTestByAttr(getWrapper(), 'guess-words-comp');
		expect(wrapper.length).toBe(1);
	});
	test('render guess word table', () => {
		const guessWordTable = findTestByAttr(wrapper, 'guess-words-table');
		expect(guessWordTable.length).toBe(1);
	});
	test('guess word table display all guessed words', () => {
		const guessWord = findTestByAttr(wrapper, 'guess-word');
		expect(guessWord.length).toBe(guessWords.length);
	});
});
