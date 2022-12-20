import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './navbar.css';

const Navbar = ({currentStr}: any) => {

    const cartQuantity = useSelector((state:RootState) => state.products.cart).length;
    return (
        <div className={'navbar' + ((currentStr === '/') ? '' : ' dark')}>
            <div className="navbar__links">
                <NavItem to='/new' name='NEW'/>
                <NavItem to='/catalog' name='КАТАЛОГ'/>
                <NavItem to='/about' name='ПРО НАС'/>
            </div>
            <div className="navbar__logo"><Link to="/"><p className='logo'>CARLIT</p></Link></div>
            <div className="navbar__icons">
                <img src={require(`../../images/icons/find${(currentStr === '/') ? '' : 'Pink'}.png`)} alt="" />
                <NavLink end 
                        to="/cart">
                        <img src={require(`../../images/icons/basket${(currentStr === '/') ? '' : 'Pink'}.png`)} alt="" />
                        <span className='cartQuantity'>{cartQuantity}</span>
                </NavLink>
            </div>
        </div>
    );
};
export const NavItem =(props : any)=>{

    let activeStyle = {
        fontWeight: 300,
      };
    

    return(
         <li className='nav-item' >
        <NavLink end 
                to={props.to}
                style={({ isActive }) =>isActive ? props.style || activeStyle  : undefined}
        >{props.name}</NavLink>
         </li>
    )
   
}
export default Navbar;