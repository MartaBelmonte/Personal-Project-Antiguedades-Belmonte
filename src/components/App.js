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


  return (
    <div className="app">
      <header className="header">
        <h1>Antiguedades Belmonte</h1>
        <button className="menu-button" onClick={toggleMenu}>
          <img className={`menu-icon ${isMenuOpen ? 'open' : ''}`} src={menuIconImage} alt="hamburguer"></img>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#">Productos</a>
          <a href="#">Quiénes somos</a>
          <a href="#">Contacta</a>
          <a href="#">Dónde encontrarnos</a>
        </nav>
      </header>

      <main className="main">
        <section className="main-section">
          <img className="image" src={fotoPortada} alt="Foto portada" />
        </section>
        <section className="main-section">
          <h2>Productos</h2>
          <ul>
            <li>Foto productos</li>
          </ul>
        </section>
        <section className="main-section">
          <h2>Quiénes somos</h2>
          <img className="image" src={fotoXevi} alt="Foto Xevi" />
          <article>
          ¡Bienvenidos a nuestro mundo de maravillas únicas!
          <p>Explora nuestra tienda en línea, donde podrás descubrir una amplia variedad de productos exquisitos a precios para todos los bolsillos. Nuestra colección abarca desde piezas con historia hasta elementos que resplandecen con un toque contemporáneo.</p>
          <p>Mantente informado sobre nuestros próximos eventos, donde celebramos la artesanía y el diseño en todas sus formas. Charlas, exposiciones y más te esperan para sumergirte en la magia de cada época.</p>
          <p>¿Tienes preguntas? No dudes en contactarnos a través de nuestra página de contacto o seguirnos en redes sociales. Estamos aquí para ti, compartiendo la pasión por lo auténtico y lo hermoso.</p>
          ¡Bienvenidos a un mundo de elegancia y encanto!
          </article>
        </section>

        <section className="main-section">
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
        <section className="main-section">
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

