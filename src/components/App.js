import React from 'react';
import fotoPortada from '../images/mueble-portada.jpeg';
import MyCalendar from '../components/calendar/Calendar';
import MyProducts from '../components/products/Products';
import WhoWeAre from '../components/whoweare/WhoWeAre';
import Menu from '../components/menu/Menu';
import Contact from '../components/contact/Contact';
import '../styles/App.css';

function App() {
  
  return (
    <div className="app">
      <Menu/>
      <main className="main">
        <section className="main-section">
          <img className="image" src={fotoPortada} alt="Foto portada" />
        </section>
          <MyProducts/>
          <WhoWeAre/>
          <Contact/>
          <MyCalendar/>
      </main>
      <footer className="footer">
      <div className="footer-links">
        <a href="#productos">Productos</a>
        <a href="#quienes-somos">Quiénes somos</a>
        <a href="#contacta">Contacta</a>
        <a href="#proximos-eventos">Próximos eventos</a>
      </div>
    </footer>
    </div>
  );
}

export default App;


