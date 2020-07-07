import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import '../index.css';
import { robots } from '../Robot';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
class App extends React.Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

// Anthing own method used below template
	onSearchChange = (event)=>{
		// Not this.state.searchfield = event.tar.....;
		this.setState({searchfield: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users=> this.setState({robots: users}) );
	}


	render(){
		// When the state change, it will automaticaaly render
		const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot=>{
			return	robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!this.state.robots.length)	return <h1>Waiting</h1>
		else{
			return(
				<div className = 'tc'>
					<h1>Robofrirnds</h1>
					<SearchBox	searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
						<CardList robots = {filterRobots}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}


export default App;