import * as React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Success from './Success';

const defaultProps = {
	success: false
};

describe('SuccessComponent', () => {
	function getWrapper(props = {}) {
		const compProps = { ...defaultProps, ...props };
		return shallow(<Success {...compProps} />);
	}
	function findByTestAttr(wrapper, attrValue) {
		return wrapper.find(`[data-test="${attrValue}"]`);
	}

	test('render success component without error', () => {
		const successComp = findByTestAttr(getWrapper(), 'success-comp');
		expect(successComp.length).toBe(1);
	});

	test('render no success message on success props value false', () => {
		const checkProps = checkPropTypes(
			// eslint-disable-next-line react/forbid-foreign-prop-types
			Success.propTypes,
			{ success: false },
			'prop',
			Success.name
		);
		expect(checkProps).toBeUndefined();
		const successMsg = findByTestAttr(
			getWrapper({ success: false }),
			'success-msg'
		);
		expect(successMsg.length).toBeFalsy();
	});
	test('render success message on success props value true', () => {
		const successMsg = findByTestAttr(
			getWrapper({ success: true }),
			'success-msg'
		);
		expect(successMsg.length).toBeTruthy();
		expect(successMsg.length).not.toBe(0);
	});
});
