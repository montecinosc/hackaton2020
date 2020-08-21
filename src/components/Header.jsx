import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css'

const Button = () => {
    return (
        <div>
            <button className="button">Unete a nuestra red</button>
        </div>
    );
}

const Header = () => {
    return (
        <div className="header">
            <div className="topHeader">
                <i>AMUSAS</i>
                <Button />
            </div>
            <Navigation />
        </div>
    );
}

export default Header;