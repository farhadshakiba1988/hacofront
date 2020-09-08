// -------------------------------------------------
// Here we are implementing the Menu Section
// For every links we must use NavLink from react-router-dom
// -------------------------------------------------

import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'

import DashboardIcon from '../../Icons/dashboardIcon';
import TaskManagerIcon from '../../Icons/taskManager';
import HrIcon from '../../Icons/hrIcon';
import DownArrowIcon from '../../Icons/downArrowIcon.svg';
import UpArrowIcon from '../../Icons/upArrowIcon.svg';


const Menu = (props) => {
	const { t } = useTranslation();

	const userWidth = window.innerWidth;
	let Hacoupian;

	if(userWidth > 1200) {
		Hacoupian = props.expanded ? (
			<div className='h'>H</div>
		) : (
			<div className='hacoupian center'>Hacoupian</div>
		);
	} else if(userWidth < 768) {
		Hacoupian = props.expanded ? (
			<div className='h center'>Hacoupian</div>
		) : (
			<div className='hacoupian center'></div>
		);
	} else if(userWidth > 768 && userWidth < 1200) {
		Hacoupian = props.expanded ? (
			<div className='h center'>Hacoupian</div>
		) : (
			<div className='hacoupian'>H</div>
		);
	}


	const li = props.show ? (
		<div className='dropdown-container'>
			<NavLink activeStyle={style} activeClassName='selected' to='/joboffer'>
				{t('menu.hr.2')}
			</NavLink>
			<NavLink activeStyle={style} to='/landing'>
				{t('menu.hr.3')}
			</NavLink>
			<NavLink activeStyle={style} to='/tutorial'>
				{t('menu.hr.4')}
			</NavLink>
			<NavLink activeStyle={style} to='/archive'>
				{t('menu.hr.5')}
			</NavLink>
			<NavLink activeStyle={style} to='/kanban'>
				{t('menu.hr.6')}
			</NavLink>

		{	<NavLink activeStyle={style} to='/kanban2'>
				{t('menu.hr.7')}
			</NavLink>}
		</div>
	) : null;

	const upOrDown = props.show ? UpArrowIcon : DownArrowIcon;

	let path = useLocation()
	const dashboardChangeColor = path.pathname === '/dashboard' ? <DashboardIcon color = "#f87171" /> : <DashboardIcon color = "#585e91" />;
	const taskManagerChangeColor = path.pathname === '/taskmanager' ? <TaskManagerIcon color = "#f87171" /> : <TaskManagerIcon color = "#585e91" />;
	const hrChangeColor = (path.pathname === '/joboffer') || (path.pathname === '/landing')  || (path.pathname === '/tutorial') || (path.pathname === '/archive')|| (path.pathname === '/kanban')|| (path.pathname === '/kanban2') ? <HrIcon color = "#f87171" /> : <HrIcon color = "#585e91" />;

	return (
		<div className='menu'>
			<div>{Hacoupian}</div>

			<div className='sidenav'>
				<NavLink
					activeClassName='selected'
					to='/dashboard'
					className='menu-item'
				>
					<span className = 'menu-text'>{t('menu.dashboard')}</span>
					<span className = 'menu-icon'>
						{dashboardChangeColor}
					</span>
				</NavLink>
				<NavLink
					activeClassName='selected'
					to='/taskmanager'
					className='menu-item'
				>
					<span className = 'menu-text'>
						{t('menu.task-manager')}
					</span>
					<span className = 'menu-icon'>
						{taskManagerChangeColor}
					</span>
				</NavLink>
				<div
					onClick={props.toggleShow}
					className='menu-item'>
					<img src={upOrDown} alt='up arrow icon' />
					<span className='hr-text'>{t('menu.hr.1')}</span>
					<span className = 'hr-icon'>
						{hrChangeColor}
					</span>
				</div>
				{li}
			</div>
		</div>
	);
};

const style = {
	color: '#f87171',
	fontFamily: 'ExtraBold',
};




export default Menu;
