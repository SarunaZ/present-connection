import React from 'react';
import Logo from '../../Images/pc-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_NEW_RECORDS } from '../../App/constants';

const Header = () => {
  const { pathname } = useLocation();
  
  return (
    <header className="Header">
      <h1>
        <Link title='Present Connection showcase' to='/'>
          <img  src={Logo} alt="Present Connection logo"/>
        </Link>
      </h1>
      <nav className="Navigation">
        <ul>
          {pathname !== ROUTE_NEW_RECORDS && (
            <Link to={ROUTE_NEW_RECORDS} className="Navigation__item">New record</Link>
          )}
        </ul>
      </nav>
    </header>
  );
}


export default Header;