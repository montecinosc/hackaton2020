import React from 'react';
import Navigation from './Navigation';
import iconGetIn from '../img/get-in.png';
import '../styles/Header.css'

const Button = () => {
    return (
        <div>
            <button className="button">Únete a nuestra red</button>
        </div>
    );
}

const GetIn = () => {
    return (
        <div className='getIn'>
            <p>Ingresar <img src={iconGetIn} alt='iconContact' className='icon' /></p>
        </div>
    );
}

const Header = () => {
    return (
        <div className="header">
            <div className="topHeader">
                <span className="logo">AMUSAS</span>
                <div className='rightHeader'>
                    <Button />
                    <GetIn />
                </div>
            </div>
            <Navigation />
        </div>
    );
}

export default Header;