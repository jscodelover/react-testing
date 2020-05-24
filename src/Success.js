import * as React from 'react';
import PropTypes from 'prop-types';

function Success(props) {
	const { success } = props;

	return (
		<div data-test="success-comp">
			{success ? (
				<div data-test="success-msg">
					Congratulations you found the secret word !!!
				</div>
			) : null}
		</div>
	);
}

Success.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Success;
