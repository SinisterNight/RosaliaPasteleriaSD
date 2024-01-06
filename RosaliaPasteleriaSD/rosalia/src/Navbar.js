import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">Bienvenidos</div>
        <ul className="nav-links">
          <li><Link to="/">Catálogo</Link></li>
          <li><Link to="/bizcochos">Bizcochos</Link></li>
          <li><Link to="/cheesecake">Cheesecake</Link></li>
          {/*menu items*/}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
