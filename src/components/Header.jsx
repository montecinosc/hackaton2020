import React from 'react';
import Navigation from './Navigation';
import './Header.css';

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
                <span className="logo">AMUSAS</span>
                <Button />
            </div>
            <Navigation />
        </div>
    );
}
 
export default Header;