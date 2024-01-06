import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">Bienvenidos</div>
        <ul className="nav-links">
          <li>Catálogo</li>
          <li><a href="#cakes">Bizcochos</a></li>
          <li><a href="#cheesecake">Cheesecake</a></li>
          <li><a href="#brownies">Brownies</a></li>
          <li><a href="#cookies">Galletas</a></li>
          <li><a href="#icecream">Helados</a></li>
          <li><a href="#otherdesserts">Otros Postres</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
