import React from 'react';

const Contact = () => { 

    return (
        <section id="contacta" className="main-section">
          <h2 style={{ textAlign: 'center', margin:'20px' }}>Contacta</h2>
          <form className="form">
            <div className='input-group'>
              <label>Tu nombre completo:</label>
              <input type="text" name="nombre" />
            </div>
            
            <div className='input-group'>
              <label>Correo electrónico:</label>
              <input type="email" name="email" />
            </div>
          
          <div className='input-group'>
              <label>¿Qué nos quieres preguntar?</label>
              <textarea name="mensaje" rows='5'></textarea>
           </div> 
           
            <button class="submit-button" type="submit">Enviar</button>
          </form>
        </section>

    );

};


export default Contact;