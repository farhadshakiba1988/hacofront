// -------------------------------------------------
// Title : Frame
// Here we are implementing frame that divided into three section
// Section one Header Component
// Section two Menu Component
// Section three Content Component that all Pages will implement here
// now we are importing these three Components that makes our frame
// -------------------------------------------------

import React, { Component } from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Menu from '../Menu/Menu';

import './App.css';

class App extends Component {
	state = {
		expanded: false,
		show: false,
	};

	expandToggler = () => {
		this.setState({
			expanded: !this.state.expanded,
		});
	};

	toggleShow = () => {
		this.setState({
			show: !this.state.show,
		});
	};

	render() {
		return (
			<div className='app'>
				<Menu
					expanded={this.state.expanded}
					toggleShow={this.toggleShow}
					show={this.state.show}
				/>
				<div
					className={this.state.expanded ? 'container-expanded' : 'container'}
				>
					<Header expandToggler={this.expandToggler} />
					<Content />
				</div>
			</div>
		);
	}
}

export default App;
