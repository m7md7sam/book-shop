import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">All books</Link>
        <div className="centered aligned">
        <Link to="/" className="item">Book Shop</Link>
        </div>
        <div className="right menu">
          <Link to="/cart" className="item">
            <i className="shopping cart icon" />
          </Link>
        </div>
      </div>
    );
};

export default Header;

