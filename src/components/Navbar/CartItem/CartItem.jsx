import { useCart } from "../../../context/CartContext";
import stylesCartItem from './CartItem.module.css'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useCart()
    let newPrice = price * quantity

    return (
        <div key={id} className={stylesCartItem.container}>
            <div className={stylesCartItem.productInfo}>
                <h4>{name}</h4>
            </div>
            <div className={stylesCartItem.productElse}>
                <p>Cantidad: {quantity}</p>
                {
                    quantity > 1 ? (
                        <p>Precio: ${newPrice}</p>
                    ) : (            
                        <p>Precio: ${price}</p>  
                    )
                }
            </div>
            <div className={stylesCartItem.buttonContainer}>
                <button onClick={() => removeItem(id)}>X</button>
            </div>
        </div>
    )

}

export default CartItem;