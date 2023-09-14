import React, { useState, useEffect } from 'react';
import menuIconImage from '../images/ico-menu.png';
import fotoXevi from '../images/foto-xevi.jpeg';
import fotoPortada from '../images/mueble-portada.jpeg';
import MyCalendar from '../components/calendar/Calendar';
import '../styles/App.css';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //cerrar el menú cuando se hace clic en un enlace del menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Antiguedades Belmonte</h1>
        <button className="menu-button" onClick={toggleMenu}>
          <img className={`menu-icon ${isMenuOpen ? 'open' : ''}`} src={menuIconImage} alt="hamburguer"></img>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#productos" onClick={closeMenu}>Productos</a>
          <a href="#quienes-somos" onClick={closeMenu}>Quiénes somos</a>
          <a href="#contacta" onClick={closeMenu}>Contacta</a>
          <a href="#proximos-eventos" onClick={closeMenu}>Próximos eventos</a>
        </nav>
      </header>

      <main className="main">
        <section className="main-section">
          <img className="image" src={fotoPortada} alt="Foto portada" />
        </section>
        <section id="productos" className="main-section">
          <h2>Productos</h2>
          <ul>
            <li>Foto productos</li>
          </ul>
        </section>
        <section id="quienes-somos" className="main-section quienes-somos">
          <div className="imagen-quienes-somos">
            <img src={fotoXevi} alt="Foto Xevi" />
          </div>
          <div className="texto-quienes-somos">
          <h2>Quiénes somos</h2>
          <article className='quienes-somos'>
          <p>¡Bienvenidos a nuestro mundo de maravillas únicas! Explora nuestra tienda en línea, donde podrás descubrir una amplia variedad de productos exquisitos a precios para todos los bolsillos. Nuestra colección abarca desde piezas con historia hasta elementos que resplandecen con un toque contemporáneo. Mantente informado sobre nuestros próximos eventos, donde celebramos la artesanía y el diseño en todas sus formas. Charlas, exposiciones y más te esperan para sumergirte en la magia de cada época.
          ¿Tienes preguntas? No dudes en contactarnos a través de nuestra página de contacto o seguirnos en redes sociales. Estamos aquí para ti, compartiendo la pasión por lo auténtico y lo hermoso.
          ¡Bienvenidos a un mundo de elegancia y encanto!</p>
          </article>
        </div>
      </section>

        <section id="contacta" className="main-section">
          <form className="form">
            <h2>Contacta</h2>
            <label>
              Tu nombre completo:
              <input type="text" name="nombre" />
            </label>
            <br />
            <label>
              Correo electrónico:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              ¿Qué nos quieres preguntar?
              <textarea name="mensaje"></textarea>
            </label>
            <br />
            <button class="submit-button" type="submit">Enviar</button>
          </form>
        </section>
        <section id="proximos-eventos" className="main-section">
          <h2>Próximos eventos</h2>
          <MyCalendar/>
        </section>
      </main>

      <footer className="footer">
        <p>Contacto: info@blablabla.com</p>
        <p>Ubicación: Manresa, Barcelona</p>
        <a href="#">Instagram</a>
        <a href="#">Todo Colección</a>
      </footer>
    </div>
  );
}

export default App;

