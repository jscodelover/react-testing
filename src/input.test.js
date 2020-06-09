import * as React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { storeFactory } from './util/testHelper';

function setup(initialState = {}) {
	return shallow(<Input store={storeFactory(initialState)} />);
}

describe('Input Component when word is not guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup().dive().dive();
	});

	test('render component without error', () => {
		expect(wrapper.find('[data-test="input-wrapper-component"]').length).toBe(1);
	});
	test('render input tag without error', () => {
		expect(wrapper.find('[data-test="input-component"]').length).toBe(1);
	});
	test('render button tag without error', () => {
		expect(wrapper.find('[data-test="button-component"]').length).toBe(1);
	});
});

describe('Input Component when word is guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ successReducer: { success: true } })
			.dive()
			.dive();
	});

	test('render component without error', () => {
		expect(wrapper.find('[data-test="input-wrapper-component"]').length).toBe(0);
	});
	test('render input tag without error', () => {
		expect(wrapper.find('[data-test="input-component"]').length).toBe(0);
	});
	test('render button tag without error', () => {
		expect(wrapper.find('[data-test="button-component"]').length).toBe(0);
	});
});
