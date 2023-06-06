import Item from '../Item/Item'
import stylesItemList from './ItemList.module.css'


const ItemList = ({ products }) => {
    return (
        <div className={stylesItemList.containerProd}>
            {products.map(prod => <Item key={prod.key} {...prod}/>)}
        </div>
    )
}

export default ItemList;