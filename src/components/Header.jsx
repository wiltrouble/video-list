import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/profile.png'

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={logo} alt="Platzi Video"/>
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li>
                    <Link to="/login">
                        Iniciar secion
                    </Link>
                </li>
            </ul>
        </div>
    </header>

);

export default Header;