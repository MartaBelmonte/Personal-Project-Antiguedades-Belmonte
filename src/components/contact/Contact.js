


const Contact = () => { 

    return (
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

    );

};


export default Contact;