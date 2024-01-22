import { useCart } from "../../../context/CartContext";
import styles from './CartItem.module.css'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useCart()
    let newPrice = price * quantity

    return (
        <div key={id} className={styles.container}>
            <div className={styles.productInfo}>
                <h4>{name}</h4>
            </div>
            <div className={styles.productElse}>
                <p>Cantidad: {quantity}</p>
                {
                    quantity > 1 ? (
                        <p>Precio: ${newPrice}</p>
                    ) : (            
                        <p>Precio: ${price}</p>  
                    )
                }
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => removeItem(id)}>X</button>
            </div>
        </div>
    )

}

export default CartItem;