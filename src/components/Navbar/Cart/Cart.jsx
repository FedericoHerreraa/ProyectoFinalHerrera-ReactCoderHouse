import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import stylesCart from './Cart.module.css'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart()

    if (totalQuantity === 0) {
        <div>
            <h2>No hay productos en el carrito</h2>
            <Link to={'/'}>Volver al incio</Link>
        </div>
    }
    
    return (
        <div>
            <h3 className={stylesCart.title}>Carrito de compras:</h3>
            {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <div className={stylesCart.container}>
                <p>Total: ${total}</p>
                {console.log(total)}
                <button onClick={() => clearCart()}>Vaciar carrito</button>
            </div>
        </div>
    )

}

export default Cart;