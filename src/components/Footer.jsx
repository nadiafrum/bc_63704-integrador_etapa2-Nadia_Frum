import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    
    <>
    <footer>
    <div className="news">
    <h2 className="news__title">Novedades</h2>
    <h3 className="news__title2">Suscribite a nuestro newsletter</h3>
    <input className="news__mail" name="email" placeholder="Email" type="email"/>
    <button className="news__button">Suscribirme</button>
  </div>
  
  <div className="client">
    <h2 className="client__title">Atención al cliente</h2>
    <NavLink className="client__faq" to="#">FAQ</NavLink>
    <NavLink className="client__payment" to="#">Condiciones y formas de pago</NavLink>
  </div>

  <div className="social">
    <h2 className="social__title">Seguinos en nuestras redes sociales</h2>
    <NavLink className="social__facebook" to="#"><i className="fa-brands fa-facebook"></i></NavLink>
    <NavLink className="social__instagram" to="#"><i className="fa-brands fa-instagram"></i></NavLink>
  </div>
  </footer>
  </>
  )
}

export default Footer