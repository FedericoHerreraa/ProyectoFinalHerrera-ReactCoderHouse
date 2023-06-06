import { useEffect, useState } from "react"
import { detailProduct } from "../../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import stylesItemDetailContainer from './ItemDetailContainer.module.css'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [ products,setProducts ] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        detailProduct(itemId)
            .then((res) => {
                setProducts(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div>
            <div className={stylesItemDetailContainer.container}>
                <ItemDetail {...products}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;