import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Success from './Success';

Enzyme.configure({ adapter: new Adapter() });

describe('SuccessComponent', () => {
	function getWrapper(props = {}) {
		return shallow(<Success {...props} />);
	}
	function findByTestAttr(wrapper, attrValue) {
		return wrapper.find(`[data-test="${attrValue}"]`);
	}

	test('render success component without error', () => {
		const successComp = findByTestAttr(getWrapper(), 'success-comp');
		expect(successComp.length).toBe(1);
	});
	test('render no success message on success props value false', () => {
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
