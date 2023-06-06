import { useState,useEffect } from "react"
import { getProducts,getProductByCategory } from "../../../../asyncMock"
import ItemList from '../ItemList/ItemList'
import stylesItemListContainer from './itemListContainer.module.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [ products,setProducts ] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts

        asyncFunc(categoryId)
            .then((res) => {
                setProducts(res)

            })
            .catch((error) => {
                console.log(error)
            })

    }, [categoryId])

    return (
        <div className={stylesItemListContainer.container}>
            <div>
                <h3 className={stylesItemListContainer.greeting}>{greeting}</h3>
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;