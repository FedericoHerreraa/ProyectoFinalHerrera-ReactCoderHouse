import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import styles from './ItemDetail.module.css'
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
        <article className={styles.container}>
            <div className={styles.titleImg}>
                <div className={styles.name}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.containerImg}>
                    <img className={styles.img} src={img}/>
                </div>
            </div>
            <div className={styles.containerDetail}>
                <div className={styles.information}>
                    <p><b className={styles.options}>Marca: </b>{category}</p>
                    <p><b className={styles.options}>Precio: </b>{price}</p>
                    <p><b className={styles.options}>Descripcion: </b>{description}</p>
                    <p><b className={styles.options}>Stock disponible: </b>{stock}</p>
                </div>
                <div className={styles.containerCarrito}>
                    {
                        quantity > 0 ? (
                            <Link to={'/cart'} className={styles.option}>Terminar compra</Link>
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