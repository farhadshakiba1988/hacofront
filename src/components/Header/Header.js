// -------------------------------------------------
// Here we are implementing Header Section
// -------------------------------------------------

import React from 'react';
import MenuIcon from '../../Icons/menuIcon.svg';

import './Header.css';

const Header = (props) => {
	return (
		<div className='header text-right w-full bg-white'>
			<span>
				<button className='bg-transparent border-none cursor-pointer'>
					<img src={MenuIcon} alt='menu icon' onClick={props.expandToggler} />
				</button>
			</span>
		</div>
	);
};

export default Header;
