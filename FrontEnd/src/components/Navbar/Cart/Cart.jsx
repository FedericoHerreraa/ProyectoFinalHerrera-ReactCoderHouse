import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from './Cart.module.css'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()
    
    return (
        <div className={styles.containerAll}>
            {
                totalQuantity() === 0 ? (
                    <div>
                        <h2 className={styles.titleEmpty}>Carrito de compras vacio</h2>
                        <Link to={'/'} className={styles.return}>Volver al incio</Link>
                    </div>
                ) : (
                    <div>
                        <h3 className={styles.title}>Carrito de compras:</h3>
                        {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
                        <div className={styles.container}>
                            <p>Total: ${total()}</p>
                            <div className={styles.buttons}>
                                <Link to={'/checkout'}><button  className={styles.checkout} >Ir a pagar</button></Link>
                                <button className={styles.clear} onClick={clearCart}>Vaciar carrito</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>    
    )
}

export default Cart;