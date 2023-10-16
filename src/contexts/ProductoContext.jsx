import { useState, createContext, useEffect } from "react"
import { del, get, post, put } from "../utils/http"
/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const ProductoContext = createContext()

/* 2do -> El armado del Provider */
const url = import.meta.env.VITE_URL
const ProductoProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) // <= Al tener un array de referencias vacío el useEffect se va a ejecutar una sola vez

    const obtenerProductos = async () => {
        try {
            const products = await get(url)
            setProductos(products)
        } catch (error) {
            console.error('Ocurrió un error en obtenerProductos()', error)
        }
    }

    const crearProductoContext = async (productoNuevo) => {
        try {
            const productoCreado = await post(url, productoNuevo)
            setProductos([...productos, productoCreado])
        } catch (error) {
            console.error('Algo pasó en el crearProductoContext', error)
        }
    }

    const actualizarProductoContext = async (productoAEditar) => {
        try {
            const productoEditado = await put(url, productoAEditar.id, productoAEditar)
            console.log(productoEditado)
            const nuevaDB = productos.map( producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevaDB)
        } catch (error) {
            console.error('Ocurrió un problema en actualizarProductoContext', error)
        }
    }

    const eliminarProductoContext = async (id) => {
        try {
            const productoEliminado = await del(url, id)
            console.log(productoEliminado)
            let nuevaDB = productos.filter(producto => producto.id !== id)
            setProductos(nuevaDB)
        } catch (error) {
            console.error('Algo pasó en el eliminarProductoContext', error)
        }
    }

    const data = {productos, crearProductoContext, eliminarProductoContext, actualizarProductoContext}

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
}
/* 3er -> Las exportaciones */
export { ProductoProvider }
export default ProductoContext