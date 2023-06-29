import cart from './cart.svg'
import stylesCart from './CartWidget.module.css'
import { useCart } from '../../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()
    const total = totalQuantity()

    return (
        <div className={stylesCart.carrito}>
            <img src={cart}/>
            <p className={stylesCart.count}>{total}</p>
        </div>
        
    )
}

export default CartWidget;
