import Item from '../Item/Item'
import styles from './ItemList.module.css'


const ItemList = ({ products }) => {
    return (
        <div className={styles.containerProd}>
            {products.map(prod => <Item key={prod.key} {...prod}/>)}
        </div>
    )
}

export default ItemList;