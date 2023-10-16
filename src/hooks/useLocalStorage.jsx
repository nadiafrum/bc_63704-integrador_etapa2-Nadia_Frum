import { useState } from "react";

export const useLocalStorage = (clave, valorInicial = []) => {

    const getValorAlmacenado = () => {
        try {
            const valorAlmacenadoLS = window.localStorage.getItem(clave)
            return valorAlmacenadoLS ? JSON.parse(valorAlmacenadoLS) : valorInicial 
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }
    }

    // Estado del carrito en el LS
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => { // valorNuevo => va a contenedr un producto = {}

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo] // Creo un nuevo array y coloco lo que ya tenía más el nuevo producto
            setValorAlmacenado(nuevoValorAlmacenado) // guardo en el estado el nuevoValorAlmacenado 
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado)) // nuevo array generado con el nuevo producto dentro del storage
        } catch (error) {   
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }

    }

    const eliminarValor = (id) => {
    
        try {
            /*      clon del carrito        carrito */
            const nuevoValorAlmacenado = [...valorAlmacenado]
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
            nuevoValorAlmacenado.splice(indice, 1)
            setValorAlmacenado(nuevoValorAlmacenado) // Eliminé el producto del estado de la aplicación
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al eliminar ${clave} del localStorage: ${error}`)
        }
    }

    const actualizarValores = (carrito) => {
        try {
            window.localStorage.setItem(clave, JSON.stringify(carrito))
        } catch (error) {
            console.error(`Error al actualizar el carrito ${clave} del localStorage: ${error}`)
        }
    }

    const limpiarStorage = () => {
        try {
            window.localStorage.clear()
            window.localStorage.setItem(clave, JSON.stringify(valorInicial))
            setValorAlmacenado(valorInicial)
        } catch (error) {
            console.error(`Error al limpiar el Storage ${clave} del localStorage: ${error}`)
        }
    }



    return [ guardarValor, eliminarValor, limpiarStorage, actualizarValores,  valorAlmacenado ]
}