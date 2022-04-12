import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, ABOUT_ROUTE } from 'src/Constants/Router';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='navigationBar'>
      <NavLink className="navigationBar__navLink" to={HOME_ROUTE}>Home</NavLink>
      <NavLink className="navigationBar__navLink" to={ABOUT_ROUTE}>About</NavLink>
    </nav>
  )
}

export default NavBar
