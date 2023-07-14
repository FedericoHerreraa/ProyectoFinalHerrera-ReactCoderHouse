import ItemDetail from "../ItemDetail/ItemDetail"
import stylesItemDetailContainer from './ItemDetailContainer.module.css'
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../../service/firebase/firestore/products"
import { useAsync } from "../../../hooks/useAsync"

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const getProductById = () => getProductsByCategory(itemId)

    const [ products, loading, error] = useAsync(getProductById, [itemId])

    if (loading) {
        return (
            <div className={stylesItemDetailContainer.loading}>
                <div className={stylesItemDetailContainer.spinner}>
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
        <div className={stylesItemDetailContainer.containerAll}>
            <h2 className={stylesItemDetailContainer.title}>Detalle de producto</h2>
            <div className={stylesItemDetailContainer.container}>
                <ItemDetail {...products}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;