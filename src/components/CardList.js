import React from 'react';
import Card from './Card.js';

const CardList = ({robots})=>{
	// Map is iterable
	// if (true) {
	// 	throw new Error('Noooo');
	// }
	const cardComponent = robots.map( (user, i) =>{
		// For Need to give key
		return (<Card 
		key={i} 
		id = {robots[i].id} 
		name = {robots[i].Name }  
		email = {robots[i].email }/>
		)
	});
	return(
		<div>
  			{cardComponent}
  		</div>
	);
}

export default CardList;