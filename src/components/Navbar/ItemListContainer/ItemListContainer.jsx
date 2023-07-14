import ItemList from '../ItemList/ItemList'
import stylesItemListContainer from './itemListContainer.module.css'
import { useParams } from "react-router-dom"
import { getProducts } from "../../../service/firebase/firestore/products"
import { useAsync } from "../../../hooks/useAsync"

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const [ products, loading, error ] = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return (
            <div className={stylesItemListContainer.loading}>
                <div className={stylesItemListContainer.spinner}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        console.log(error)
    }

    return (
        <div className={stylesItemListContainer.container}>
            <div className={stylesItemListContainer.searchBarContainer}>
                <input type="search" placeholder="Buscar productos" className={stylesItemListContainer.searchBar}></input>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;