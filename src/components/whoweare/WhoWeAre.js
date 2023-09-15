import React from 'react';
import fotoXevi from '../../images/foto-xevi.jpeg';

const WhoWeAre = () => { 

    return (
        <section id="quienes-somos" className="main-section quienes-somos">
          <div className="imagen-quienes-somos">
            <img src={fotoXevi} alt="Foto Xevi" />
          </div>
          <div className="texto-quienes-somos">
          <h2>Quiénes somos</h2>
          <article className='quienes-somos'>
          <p>Mi nombre es Xavier, y mi historia se entrelaza con la encantadora ciudad de Manresa. Desde los albores de mi infancia, me sumergí en el fascinante mundo de las antigüedades. A lo largo de los años, he nutrido una colección de objetos tan singulares que algunos de ellos se han convertido en auténticos tesoros irremplazables, cargados de historias y nostalgia.</p> 
          <p>Esta pasión que me envuelve no solo es una afición, sino una auténtica vocación. La compra y venta de antigüedades se ha convertido en una parte integral de mi vida, una búsqueda incesante de piezas únicas y la emoción de descubrir su rica historia. Adentrarse en el universo de las antigüedades es como abrir un libro que revela el pasado de diferentes culturas y épocas.</p>
          <p>Una de mis experiencias más gratificantes es la asistencia a ferias especializadas. En estos eventos, comparto mi entusiasmo con otros apasionados por las antigüedades, y se produce un intercambio de conocimientos y objetos que enriquece aún más mi aprecio por este mundo.</p>
          <p>Quiero expresar mi sincero agradecimiento por tomarte el tiempo de leer estas palabras. Mi viaje en el mundo de las antigüedades sigue evolucionando, y cada día es una oportunidad para explorar, aprender y compartir la belleza y la historia que estas piezas únicas tienen para ofrecer.</p>
          </article>
        </div>
      </section>

    );

};


export default WhoWeAre;