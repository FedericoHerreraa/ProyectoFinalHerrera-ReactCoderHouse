import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import stylesCart from './Cart.module.css'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()
    
    return (
        <div className={stylesCart.containerAll}>
            {
                totalQuantity() === 0 ? (
                    <div>
                        <h2 className={stylesCart.titleEmpty}>Carrito de compras vacio</h2>
                        <Link to={'/'} className={stylesCart.return}>Volver al incio</Link>
                    </div>
                ) : (
                    <div>
                        <h3 className={stylesCart.title}>Carrito de compras:</h3>
                        {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
                        <div className={stylesCart.container}>
                            <p>Total: ${total()}</p>
                            <div className={stylesCart.buttons}>
                                <Link to={'/checkout'}><button  className={stylesCart.checkout} >Ir a pagar</button></Link>
                                <button className={stylesCart.clear} onClick={clearCart}>Vaciar carrito</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>    
    )
}

export default Cart;