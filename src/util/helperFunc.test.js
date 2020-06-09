import { getLetterMatchCount } from './helperFunc';

describe('test get Letter Match Count', () => {
	test('count in case of two same letter', () => {
		expect(getLetterMatchCount('river', 'party')).toBe(1);
	});
	test('count in case of matching secret word', () => {
		expect(getLetterMatchCount('party', 'party')).toBe(5);
	});
	test('count in case of different secret word', () => {
		expect(getLetterMatchCount('party', 'hello')).toBe(0);
	});
});
