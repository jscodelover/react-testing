import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

describe('<CounterComponent />', () => {
	function getWrapper(props = {}, state = null) {
		const wrapper = shallow(<Counter {...props} />);
		if (state) {
			wrapper.setState({ ...state });
		}
		return wrapper;
	}

	function findByTestAttr(wrapper, validator) {
		return wrapper.find(`[data-test="${validator}"]`);
	}

	test('render counter app', () => {
		const counterApp = findByTestAttr(getWrapper(), 'counter-app');
		expect(counterApp.length).toBe(1);
	});

	test('render increment button', () => {
		const counterButton = findByTestAttr(getWrapper(), 'count-inc');
		expect(counterButton.length).toBe(1);
	});

	test('render counter text', () => {
		const counterStatus = findByTestAttr(getWrapper(), 'count-status');
		expect(counterStatus.length).toBe(1);
	});

	test('check initial state of counter', () => {
		const initialState = getWrapper().state('count');
		expect(initialState).toBe(0);
	});

	test('counter button click increment', () => {
		const count = 7;
		const wrapper = getWrapper({}, { count });
		const counterButton = findByTestAttr(wrapper, 'count-inc');
		counterButton.simulate('click');
		wrapper.update();
		const counterStatus = findByTestAttr(wrapper, 'count-status');
		expect(counterStatus.text()).toContain(8);
	});

	test('counter button click decrement', () => {
		const count = 6;
		const wrapper = getWrapper({}, { count });
		const counterButton = findByTestAttr(wrapper, 'count-drc');
		counterButton.simulate('click');
		wrapper.update();
		const counterStatus = findByTestAttr(wrapper, 'count-status');
		expect(counterStatus.text()).toContain(5);
	});

	test('error message at initial render', () => {
		const errorMsg = findByTestAttr(getWrapper(), 'error-msg');
		expect(errorMsg.length).toBe(0);
	});

	test('error message on decrement at counter value 0', () => {
		const count = 0;
		const wrapper = getWrapper({}, { count });
		const counterButton = findByTestAttr(wrapper, 'count-drc');
		counterButton.simulate('click');
		wrapper.update();
		const errorMsg = findByTestAttr(wrapper, 'error-msg');
		expect(errorMsg.length).toBe(1);
	});

	test('no error message on increment at counter value 0', () => {
		const wrapper = getWrapper({}, { error: true });
		const withErrorMsg = findByTestAttr(wrapper, 'error-msg');
		expect(withErrorMsg.length).toBe(1);
		const counterButton = findByTestAttr(wrapper, 'count-inc');
		counterButton.simulate('click');
		wrapper.update();
		const withoutErrorMsg = findByTestAttr(wrapper, 'error-msg');
		expect(withoutErrorMsg.length).toBe(0);
	});
});
