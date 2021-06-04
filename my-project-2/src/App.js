import React, { Component } from 'react';
import CardList from'./CardList';
import { Robots } from'./Robots';
import SearchBox from'./SearchBox';

class  App extends Component {
	constructor() {
		super()
		this.state = { 
		Robots: Robots,
		searchfield: ''
	}
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })

}
	render() {
			const filteredRobots = this.state.Robots.filter(Robots =>{
			return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList Robots={filteredRobots}/>
		</div>
		);
	}
}

export default App;