import ItemCount from "../ItemCount/ItemCount"
import stylesItemDetail from './ItemDetail.module.css'

const ItemDetail = ({ name, img, category, description, price, stock }) => {
    return (
        <article className={stylesItemDetail.container}>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <p>Categoria: {category}</p>
                <p>Precio: {price}</p>
                <p>Descripcion: {description}</p>
            </div>
            <div>
                <ItemCount initial={0} stock={stock} onAdd={(cantidad) => console.log('La cantidad es: ' + cantidad)} />
            </div>
        </article>
        
    )
}

export default ItemDetail;