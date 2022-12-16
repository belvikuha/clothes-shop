import React from 'react';
import { NavLink } from 'react-router-dom';
import basketImg from '../../images/icons/basket.png'
import searchImg from '../../images/icons/find.png'

import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                <NavItem to='/new' name='NEW'/>
                <NavItem to='/catalog' name='КАТАЛОГ'/>
                <NavItem to='/about' name='ПРО НАС'/>
            </div>
            <div className="navbar__logo"><p className='logo'>CARLIT</p></div>
            <div className="navbar__icons">
                <img src={searchImg} alt="" /><img src={basketImg} alt="" />
            </div>
        </div>
    );
};
const NavItem =(props)=>{

    let activeStyle = {
        fontWeight: 300,
      };

    return(
         <li className='nav-item'>
        <NavLink end 
                to={props.to}
                style={({ isActive }) =>isActive ? props.style || activeStyle  : undefined}
        >{props.name}</NavLink>
         </li>
    )
   
}
export default Navbar;