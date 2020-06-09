import * as React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
	};
	render() {
		const {
			successReducer: { success }
		} = this.props;
		return !success ? (
			<div data-test="input-wrapper-component">
				<form onSubmit={this.handleSubmit}>
					<input type="text" data-test="input-component" />
					<button type="submit" data-test="button-component">
						Guess
					</button>
				</form>
			</div>
		) : null;
	}
}

const mapStateToProps = ({ successReducer }) => {
	return { successReducer };
};

export default connect(mapStateToProps)(Input);
