import { useContext } from 'react'
import './Carrito.scss'
import CarritoContext from '../contexts/CarritoContext'

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)
  console.log(carrito)

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id)
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    console.log(sumaTotal)
    return sumaTotal
  }

  return (
    <>
      <h1>Listado de productos en el carrito</h1>
      { !carrito.length <= 0 && <button onClick={handleComprar}>Comprar</button>}
      <table className="tabla-carrito">
        <thead>
         <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
          <th>Acciones</th>
         </tr>
        </thead>
        <tbody>
          {
            carrito.length <= 0 ? (
              <tr>
                <td colSpan={6}><strong>No hay productos</strong></td>
              </tr>
            ) : (
              carrito.map((producto, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={producto.foto} alt={producto.nombre} width="50px" />
                  </td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.cantidad * producto.precio}</td>
                  <td>
                    <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )
          }
          { !carrito.length <= 0 && <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>{parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td colSpan={2}></td>
          </tr>
          }

        </tbody>
      </table>
    </>
  )
}

export default Carrito