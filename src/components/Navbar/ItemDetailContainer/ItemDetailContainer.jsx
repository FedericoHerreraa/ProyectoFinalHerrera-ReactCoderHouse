import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import stylesItemDetailContainer from './ItemDetailContainer.module.css'
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../../service/firebase/firebaseConfig"
import "bootstrap/dist/css/bootstrap.min.css";


const ItemDetailContainer = () => {
    const [ products,setProducts ] = useState(null)
    const [loading,setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        const productRef = doc(db, 'products', itemId)
        setLoading(true)

        getDoc(productRef)
            .then(res => {
                const data = res.data()
                const productAdapted = { id: res.id, ...data}
                setProducts(productAdapted)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    },[itemId])

    if (loading) {
        return (
            <div className={stylesItemDetailContainer.loading}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className={stylesItemDetailContainer.title}>Detalle de producto: </h2>
            <div className={stylesItemDetailContainer.container}>
                <ItemDetail {...products}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;