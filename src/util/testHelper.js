import { createStore } from 'redux';
import rootReducer from '../rootReducer';

function storeFactory(initialState = {}) {
	const store = createStore(rootReducer, initialState);
	return store;
}

export { storeFactory };
