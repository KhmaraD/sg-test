import React from 'react';
import style from './Header.module.scss'
import logo from '../../assets/images/logo_header.png'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header>
            <div className={style.logoWrapper}>
                <img className={style.logo} src={logo} alt="logo"/>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;