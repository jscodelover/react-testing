import * as React from 'react';

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

export default Success;
