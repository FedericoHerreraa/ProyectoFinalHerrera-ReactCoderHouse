import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom';


const Item = ({ id,img,name,price }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/item/${id}`)} className={styles.container}>
            <div key={id}>
                <div className={styles.containerProduct}>
                    <div>
                        <img className={styles.img} src={img}/>
                    </div>
                    <div className={styles.namePrice}>
                        <h4 className={styles.name} >{name}</h4>
                        <p className={styles.price}>Precio: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
