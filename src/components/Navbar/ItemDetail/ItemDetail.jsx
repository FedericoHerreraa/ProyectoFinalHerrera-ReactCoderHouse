import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import stylesItemDetail from './ItemDetail.module.css'
import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [ quantity,setQuantity ] = useState(0)
    const { addItem,cart } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price, quantity
        }

        addItem(item)

    }

    
    return (
        <article className={stylesItemDetail.container}>
            <div className={stylesItemDetail.titleImg}>
                <div className={stylesItemDetail.name}>
                    <h3>{name}</h3>
                </div>
                <div className={stylesItemDetail.containerImg}>
                    <img className={stylesItemDetail.img} src={img}/>
                </div>
            </div>
            <div>
                <div className={stylesItemDetail.information}>
                    <p>Categoria: {category}</p>
                    <p>Precio: {price}</p>
                    <p>Descripcion: {description}</p>
                </div>
                <div className={stylesItemDetail.containerCarrito}>
                    {
                        quantity > 0 ? (
                            <Link to={'/cart'} className={stylesItemDetail.option}>Terminar compra</Link>
                        ) : (
                            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </div>
            </div>
        </article>
        
    )
}

export default ItemDetail;