import React from 'react';
// We are writing JSX
const Card = ({name, email, id}) =>{
	return(
		// Only return one element
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
			<img alt='photo' src= {`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;