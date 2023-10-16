import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";

/* CREANDO CONTEXTO */
/* 1er -> Crear un contexto */
const CarritoContext = createContext()
   
/* 2do -> El armado del Provider */
const url = import.meta.env.VITE_URL_CARRITO

const CarritoProvider = ( { children } ) => {
    const [ guardarEnElCarrito, eliminarDelCarrito, limpiarCarrito, actualizarCarrito, carrito ] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto) {
        //debugger
        return carrito.filter(prod => prod.id === producto.id).length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }


    const agregarCarritoContext = (producto) => {
        if (!elProductoEstaEnElCarrito(producto)) {
            // No esta en el carrito
            producto.cantidad = 1
            guardarEnElCarrito(producto)
        } else {
            // Se que esta en el carrito
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
            actualizarCarrito(carrito)
        }
    }

    const eliminarCarritoContext = (id) => {
        // console.log(id)
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async () => {
        try {
            // petición asincronica a nuestro backend
            const resultado = await post(url, carrito)
            // limpieza del localStorage y limpiar el estado
            limpiarCarrito()
        } catch (error) {
            console.error('Ocurrió un error en guardarCarritoContext()', error)
        }
    }

    const data = { carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext }
    
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }
export default CarritoContext