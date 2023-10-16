import React from 'react'
import "./Contacto.scss";
import { NavLink } from 'react-router-dom';

const Contacto = () => {
  return (
    
<>
    <div className="section-contact">
      <fieldset className="contact">
        <h2 className="contact__title">Contáctenos</h2>

        <p className="contact__phone">Teléfono: 123456789</p>
        <p className="contact__address">Dirección: Calle 12 nro 345, CABA</p>

        <p className="contact__time">
          Horario de atención: Lunes a Sábados de 9hs a 20hs
        </p>

        <NavLink className="contact__facebook" to="#"><i className="fa-brands fa-facebook"></i></NavLink>
        <NavLink className="contact__instagram" to="#"><i className="fa-brands fa-instagram"></i></NavLink>
      </fieldset>

      <fieldset className="form">
        <h2 className="form__title">Consultas o sugerencias</h2>
        <div>
          <label className="form__name" for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div>
          <label className="form__sirname" for="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
        </div>

        <div>
          <label className="form__mail" for="email">Mail de contacto</label>
          <input type="email" id="email" name="email" placeholder="Ej: mail@gmail.com" required />
        </div>

        <div>
          <label className="form__phone" for="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Código de área y número" required />
        </div>

        <div>
          <label className="form__comments" for="comentarios">Consulta o sugerencia</label>
          <textarea name="comentarios" id="comentarios"></textarea>
        </div>

        <button className="form__button">Enviar</button>

      </fieldset>

      
    </div>

</>

  )
}

export default Contacto