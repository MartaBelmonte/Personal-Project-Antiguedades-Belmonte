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
          <p>¡Bienvenidos a nuestro mundo de maravillas únicas! Explora nuestra tienda en línea, donde podrás descubrir una amplia variedad de productos exquisitos a precios para todos los bolsillos. Nuestra colección abarca desde piezas con historia hasta elementos que resplandecen con un toque contemporáneo. Mantente informado sobre nuestros próximos eventos, donde celebramos la artesanía y el diseño en todas sus formas. Charlas, exposiciones y más te esperan para sumergirte en la magia de cada época.
          ¿Tienes preguntas? No dudes en contactarnos a través de nuestra página de contacto o seguirnos en redes sociales. Estamos aquí para ti, compartiendo la pasión por lo auténtico y lo hermoso.
          ¡Bienvenidos a un mundo de elegancia y encanto!</p>
          </article>
        </div>
      </section>

    );

};


export default WhoWeAre;