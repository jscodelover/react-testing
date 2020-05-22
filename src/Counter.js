import * as React from 'react';
import './App.css';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			error: false
		};
	}
	handleInc = () => {
		const errorState = this.state.error ? { error: false } : {};
		this.setState({ count: this.state.count + 1, ...errorState });
	};
	handleDcr = () => {
		const newVal = this.state.count - 1 < 0;
		const newState = { count: newVal ? 0 : this.state.count - 1 };
		newVal && (newState['error'] = newVal);

		this.setState({ ...newState });
	};
	render() {
		return (
			// <div className="App">
			// 	<header className="App-header">
			// 		<img src={logo} className="App-logo" alt="logo" />
			// 		<p>
			// 			Edit <code>src/App.js</code> and save to reload.
			// 		</p>
			// 		<a
			// 			className="App-link"
			// 			href="https://reactjs.org"
			// 			target="_blank"
			// 			rel="noopener noreferrer"
			// 		>
			// 			React Testing
			// 		</a>
			// 	</header>
			// </div>
			<div data-test="counter-app" className="App">
				<h1 data-test="count-status">The Count is {this.state.count}</h1>
				{this.state.error ? (
					<h3 data-test="error-msg">Counter can't be less than 0</h3>
				) : null}
				<button data-test="count-inc" onClick={this.handleInc}>
					Increment
				</button>
				<button data-test="count-drc" onClick={this.handleDcr}>
					Decrement
				</button>
			</div>
		);
	}
}

export default Counter;
