import React from 'react';
import { Link } from 'react-router-dom';
import cookies from 'browser-cookies';
import history from '../../../../helpers/history';

import './index.scss'

function Header() {

    const handleLogout = () => {
        cookies.erase('token');
        history.push('/')
    }
    console.log('history: ', history.location.pathname);

    const pathName = history.location.pathname;

    return (
        <div className="topnav">
            <Link className={ `${pathName === '/home' && 'active'}` } to="/home">Home</Link>
            <Link className={ `${pathName === '/about' && 'active'}` } to="/about">About</Link>
            <Link className={ `${pathName === '/contact' && 'active'}` } to="/contact">Contact</Link>
            <div className="topnav-logout" onClick={ () => handleLogout() }>Logout</div>
        </div>
    )
}


export default Header;