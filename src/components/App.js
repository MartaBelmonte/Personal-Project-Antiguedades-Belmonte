import React, { useState, useEffect } from 'react';
import menuIconImage from '../images/ico-menu.png';
import fotoXevi from '../images/foto-xevi.jpeg';
import fotoPortada from '../images/mueble-portada.jpeg';
import '../styles/App.css';

import FullCalendar from '@fullcalendar/react'; // Importa FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin dayGrid

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let calendarEl = document.getElementById('calendar'); // Corrige el ID del contenedor del calendario

    let calendar = new FullCalendar.Calendar(calendarEl, {
      // Configuración del calendario
      plugins: [dayGridPlugin], // Utiliza el plugin dayGrid
      defaultView: 'dayGridMonth',

      // Eventos del calendario
      events: [
        {
          title: 'Evento 1',
          start: '2023-07-10',
          end: '2023-07-12',
        },
        {
          title: 'Evento 2',
          start: '2023-07-15',
          end: '2023-07-17',
        },
      ],
    });

    calendar.render();
  }, []); 



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
          <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</article>
        </section>
        <section className="main-section">
          <h2>Contacta</h2>
          <form className="form">
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
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section className="main-section">
          <h2>Próximos eventos</h2>
          <div id="calendar"></div>
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

