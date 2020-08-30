/**
 * @author Tomer Riko Shalev
 */

import React from "react"

export default class Upload extends React.Component {
	constructor() {
		super()

		this.state = {
			data: [],
		}
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => this.setState({ data: data }))
	}

	render() {
		return (
			<div>
				<h1>Upload</h1>
				<button onClick={this.doSomething}> DO SOMETHING </button>
				{this.state.data.map((item) => (
					<h1 key={item.name}>{item.name}</h1>
				))}
			</div>
		)
	}
}
