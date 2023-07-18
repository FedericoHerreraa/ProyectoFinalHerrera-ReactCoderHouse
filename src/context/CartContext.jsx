import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () => {}
})

export const CartProvider = ({ children }) => {
    const [ cart,setCart ] = useState([])

    const addItem = (item) => {
        !isInCart(item.id) ? (
            setCart(prev => {
                return [...prev,item]
            })
        ) : (
            console.error("El producto ya esta en el carrito")
           
        )
    }

    const totalQuantity = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.quantity
        })
        return total
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const total = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    return useContext(CartContext)
}