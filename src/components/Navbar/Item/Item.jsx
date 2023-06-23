import stylesItem from './Item.module.css'
import { Link } from 'react-router-dom';


const Item = ({ id,img,name,price }) => {
    return (
        <div key={id}>
            <div className={stylesItem.containerProduct}>
                <div>
                    <img className={stylesItem.img} src={img}/>
                </div>
                <div>
                    <h4 className={stylesItem.name} >Nombre: {name}</h4>
                    <p className={stylesItem.price}>Precio: ${price}</p>
                </div>
                <div className={stylesItem.buttonContainer}>
                    <Link to={`/item/${id}`} className={stylesItem.button}>Detalle</Link>
                </div>

            </div>
        </div>
    )
}

export default Item;
