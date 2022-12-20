import React from 'react';
import { NavItem } from '../navbar/Navbar';

import './footer.css'

import instImg from './img/insta.png';
import telegram from './img/telegram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="">
                <h1>КОМПАНІЯ</h1>
                <ul>
                    <NavItem to='/about' name='Про нас'/>
                    <NavItem to='/contacts' name='Контакти'/>
                </ul>
            </div>
            <div className="">
                <h1>ПОКУПЦЮ</h1>
                <ul>
                    <NavItem to='/catalog' name='Каталог'/>
                    <NavItem to='/favorite' name='Обране'/>
                    <NavItem to='/polici' name='Політика конфеденційності'/>
                </ul>
            </div>
            <div className="">
                <h1>КОНТАКТИ</h1>
                <img src={instImg} alt="" /><img src={telegram} alt="" />
                <p>+38(073) 096 36 44</p>
                <p>info@yanki.com</p>
            </div>
        </div>
    );
};

export default Footer;