import React, { useState, useEffect } from 'react';
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
        <p>Contacto: info@blablabla.com</p>
        <p>Ubicación: Manresa, Barcelona</p>
        <a href="#">Instagram</a>
        <a href="#">Todo Colección</a>
      </footer>
    </div>
  );
}

export default App;

