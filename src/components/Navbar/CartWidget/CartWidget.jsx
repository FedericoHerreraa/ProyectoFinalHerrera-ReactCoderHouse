import cart from './cart.svg'
import stylesCart from './CartWidget.module.css'
import { useCart } from '../../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()
    const total = totalQuantity

    return (
        <div className={stylesCart.carrito}>
            <img src={cart}/>
            {total}
        </div>
        
    )
}

export default CartWidget;
