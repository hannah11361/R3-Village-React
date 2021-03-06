import React from 'react';
import { Link } from 'react-router-dom';

const GamesPage = () => {
  return(
		<div className='usersContainer'>
			Game Collections Thus Far:
			<ul>
				<li><Link style={{ marginRight: '12px' }}to={'/matchGame'}>Reuse a toy - Test Your Memory</Link></li>
  				<li><Link style={{ marginRight: '12px' }} to={'/recycleGame'}>Recycle a toy - Find an object</Link></li>
  				<li><Link style={{ marginRight: '12px' }} to={'/learnGame'}>Reduce - Count Objects</Link></li>
  			</ul>
  		</div>
   )
	
}

export default GamesPage;
