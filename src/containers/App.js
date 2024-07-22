import React, { Component } from 'react';
import CardList from'../components/CardList';
import Scroll from '../components/Scroll'
//import { Robots } from'./Robots';
import SearchBox from'../components/SearchBox';
import './App.css';

class  App extends Component {
	constructor() {
		super()
		this.state = { 
		Robots: [],
		searchfield: ''
	}
}
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users =>this.setState({ Robots: users }))
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })

}
	render() {
			const { Robots, searchfield } = this.state;
			const filteredRobots = Robots.filter(Robots =>{
			return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!Robots.length) {
			return <h1>Loading</h1>
		} else {
		return (
		<div className='tc'>
			<h1 className= 'f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList Robots={filteredRobots}/>
			</Scroll>
		</div>
			);
		}
	}
}

export default App;