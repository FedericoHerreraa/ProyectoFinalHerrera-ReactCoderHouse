import cart from './cart.svg'
import stylesCart from './CartWidget.module.css'

const CartWidget = () => {

    return (
        <div className={stylesCart.carrito}>
            <img src={cart}/>
            <p>0</p>
        </div>
        
    )
}

export default CartWidget;
