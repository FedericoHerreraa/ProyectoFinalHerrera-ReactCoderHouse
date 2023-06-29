import { useState } from "react"
import stylesItemCount from './ItemCount.module.css'


const ItemCount = ({ initial,stock,onAdd }) => {
    const [ count,setCount ] = useState(initial)

    const increment = () => {if (count < stock) setCount(count + 1)}
    const decrement = () => {if (count > 1) setCount(count - 1)}

    return (
        <div className={stylesItemCount.container}>
            <div className={stylesItemCount.containerCount}>
                <div className={stylesItemCount.carritoCount}>
                    <button onClick={increment}>+</button>
                    <p>{count}</p>
                    <button onClick={decrement}>-</button>
                </div>
                <div className={stylesItemCount.product}>
                    <button className={stylesItemCount.buttonCarrito} onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )    
}

export default ItemCount;