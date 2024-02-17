import menuIconImage from '../../images/ico-menu.png';
import React, { useState, useEffect } from 'react';
import Logo from '../../images/logo-belmonte.jpg';

const Menu= () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //cerrar el menú cuando se hace clic en un enlace del menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
  <div className="logo-container">
    <img className='img-logo' src={Logo} alt="Logo Belmonte" style={{ width: '80px', height: 'auto' }}/>
  </div>
  <div className="title-container">
    <h1 className="title">Antigüedades Belmonte</h1>
  </div>
  <button className="menu-button" onClick={toggleMenu}>
    <img className={`menu-icon ${isMenuOpen ? 'open' : ''}`} src={menuIconImage} alt="hamburguer"></img>
  </button>
  <nav className={`nav ${isMenuOpen ? 'open' : ''}`} style={{ textAlign: 'center' }}>
    <a href="#productos" onClick={closeMenu}>Productos</a>
    <a href="#quienes-somos" onClick={closeMenu}>Quiénes somos</a>
    <a href="#contacta" onClick={closeMenu}>Contacta</a>
    <a href="#proximos-eventos" onClick={closeMenu}>Próximos eventos</a>
  </nav>
</header>

  );
};

export default Menu;
