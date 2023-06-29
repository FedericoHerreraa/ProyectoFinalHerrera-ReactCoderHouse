import stylesItem from './Item.module.css'
import { Link, useNavigate } from 'react-router-dom';


const Item = ({ id,img,name,price }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/item/${id}`)} className={stylesItem.container}>
            <div key={id}>
                <div className={stylesItem.containerProduct}>
                    <div>
                        <img className={stylesItem.img} src={img}/>
                    </div>
                    <div className={stylesItem.namePrice}>
                        <h4 className={stylesItem.name} >{name}</h4>
                        <p className={stylesItem.price}>Precio: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
