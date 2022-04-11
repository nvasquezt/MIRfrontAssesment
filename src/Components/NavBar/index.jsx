import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, PRODUCT_DETAIL_ROUTE, ABOUT_ROUTE } from '../Constants/Router';

const NavBar = () => {
  return (
    <nav>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={PRODUCT_DETAIL_ROUTE}>Product Detail</NavLink>
      <NavLink to={ABOUT_ROUTE}>About</NavLink>
    </nav>
  )
}

export default NavBar
