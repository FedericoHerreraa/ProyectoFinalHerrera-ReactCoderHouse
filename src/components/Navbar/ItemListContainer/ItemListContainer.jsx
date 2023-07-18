import ItemList from '../ItemList/ItemList'
import stylesitemlistcontainer from './itemListContainer.module.css'
import { useParams } from "react-router-dom"
import { getProducts } from "../../../service/firebase/firestore/products"
import { useAsync } from "../../../hooks/useAsync"

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const [ products, loading, error ] = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return (
            <div className={stylesitemlistcontainer.loading}>
                <div className={stylesitemlistcontainer.spinner}>
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
        <div className={stylesitemlistcontainer.container}>
            <div className={stylesitemlistcontainer.searchBarContainer}>
                <input type="search" placeholder="Buscar productos" className={stylesitemlistcontainer.searchBar}></input>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;