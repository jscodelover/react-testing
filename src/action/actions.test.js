import { successAction } from './actions';

describe('Actions', () => {
	test('success action creator', () => {
		expect(successAction()).toEqual({ type: 'SUCCESS' });
	});
});
