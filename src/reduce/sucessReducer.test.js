import successReducer from './successReducer';

describe('success reducer test', () => {
	test('return default state when sucess is false', () => {
		expect(successReducer(undefined, {})).toEqual({ success: false });
	});
	test('return updated state when sucess is true', () => {
		expect(successReducer(undefined, { type: 'SUCCESS' })).toEqual({
			success: true
		});
	});
});
