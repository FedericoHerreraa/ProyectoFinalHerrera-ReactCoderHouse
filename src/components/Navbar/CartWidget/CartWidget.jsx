// import cart from './cart.svg'
import stylesCart from './CartWidget.module.css'
import { useCart } from '../../../context/CartContext'
import { Badge } from "@mui/material"
import { BsCartFill } from "react-icons/bs"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    const total = totalQuantity()
    console.log(total)

    return (
        <div className={stylesCart.carrito}>
            <Badge badgeContent={total} color="secondary">
                <BsCartFill color='white' size={20}/>
            </Badge>    
        </div>
    )
}

export default CartWidget;
