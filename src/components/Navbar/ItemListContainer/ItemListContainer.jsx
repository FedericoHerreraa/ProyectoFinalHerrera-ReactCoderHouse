import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import { getProducts } from "../../../service/firebase/firestore/products"
import { useAsync } from "../../../hooks/useAsync"

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const [ products, loading, error ] = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner">
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
        <div className="container">
            <div className="searchBarContainer">
                <input type="search" placeholder="Buscar productos" className="searchBar"></input>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;