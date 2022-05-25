import React from "react";
import axios from "axios";

// let usersEndpoint = "https://jsonplaceholder.typicode.com/users";
const CancelToken = axios.CancelToken;
class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isLoading: false,
			showPage: true,
			image: '',
			index: 0,
			// cancelSource: '',
		};
		this.reload = this.reload.bind(this)
		this.reloadWithCancel = this.reloadWithCancel.bind(this)
		// this.callApi = this.callApi()
		this.callApi = this.callApi.bind(this)
		this.textInput = React.createRef();
	}

	componentDidMount() {
		this.callApi()
	}

	callApi() {
		this.textInput.current = CancelToken.source();
		this.setState({ cancelSource: CancelToken.source() })
		// cancelSource.current = CancelToken.source();

		axios
			.get("https://dog.ceo/api/breeds/image/random", {
				// cancelToken: this.state.cancelSource.token
				cancelToken: this.textInput.current.token
			})
			.then(({ data }) => {
				console.log("dog loaded...");
				this.setState({ image: data.message })
			})
			.catch(err => {
				console.log("dog error...", err);
			});

		return () => {
			this.textInput.current.cancel();

		};
	}

	reload() {
		console.log("reload()...");
		this.setState({ image: null, index: this.state.index + 1 })
		this.callApi()
	}

	reloadWithCancel() {
		console.log("reloadWithCancel()...");
		setTimeout(() => {
			console.log("cancelling...");
			this.textInput.current.cancel();
		}, 50);
	}

	render() {
		console.log(this.textInput.current, 'cancelSource')
		return (
			<div>
				<button onClick={() => this.setState({ showPage: !this.state.showPage })}>
					Toggle Page component
				</button>
				{this.state.showPage ?
					<div className="App">
						<p>
							<button onClick={this.reload}>Reload</button>
						</p>
						<p>
							<button onClick={this.reloadWithCancel}>Reload but cancel request</button>
						</p>
						<p>Dog:</p>
						<img src={this.state.image} />
					</div>
					: null}
			</div>
		);
	}
}

export default Test;

// class Test extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showPage: true
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.setState({ showPage: !this.state.showPage })}>
// 					Toggle Page component
// 				</button>
// 				{this.state.showPage ? <Page /> : null}
// 			</div>
// 		)
// 	}
// }

// class Page extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			showPage: true
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.setState({ showPage: !this.state.showPage })}>
// 					Toggle Page component
// 				</button>
// 				{this.state.showPage ? <Page /> : null}
// 			</div>
// 		)
// 	}
// }
