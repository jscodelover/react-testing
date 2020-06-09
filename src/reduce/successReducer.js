const initialState = {
	success: false
};

export default (state = initialState, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'SUCCESS':
			state = { success: true };
	}
	return state;
};
