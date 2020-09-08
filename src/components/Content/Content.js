// -------------------------------------------------
// Here we are implementing Content section
// We use React-router for routing our SPA
// For every page we must create a route here
// -------------------------------------------------

import React from 'react';
import './Content.css';
import { Switch, Route } from 'react-router-dom';
import TaskManager from './TaskManager/TaskManager';
import Dashboard from './Dashboard/Dashboard';
import JobOffer from './JobOffer/JobOffer';
import Archive from './Archive/Archive';
import Kanban from './Kanban/kanban';
import Kanban2 from './Kanban2/JobOfferEvaluateProcessForm/Form';

const Content = (props) => {
	return (
		<div className='content relative w-full text-center'>
			<Switch>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route path='/taskmanager' component={TaskManager} />
				<Route path='/joboffer' component={JobOffer} />
				<Route path='/Archive' component={Archive} />
				<Route path='/Kanban' component={Kanban} />
				<Route path='/Kanban2' component={Kanban2} />
			</Switch>
		</div>
	);
};

export default Content;
