import React, { useState } from 'react';
import Logo from '../../images/logo-belmonte.jpg';
import menuIconImage from '../../images/ico-menu.png';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className='img-logo' src={Logo} alt="Logo Belmonte" style={{ width: '80px', height: 'auto' }} />
      </div>
      <div className="title-container">
        <h1 className="title">Antigüedades Belmonte</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#productos" onClick={closeMenu}>Productos</a>
        <a href="#quienes-somos" onClick={closeMenu}>Quiénes somos</a>
        <a href="#contacta" onClick={closeMenu}>Contacta</a>
        <a href="#proximos-eventos" onClick={closeMenu}>Próximos eventos</a>
      </nav>
      <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <img className="menu-icon" src={menuIconImage} alt="hamburger" />
      </button>
    </header>
  );
};

export default Menu;

