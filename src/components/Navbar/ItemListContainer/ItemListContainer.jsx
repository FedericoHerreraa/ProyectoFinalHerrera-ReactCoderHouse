import { useState,useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import stylesItemListContainer from './itemListContainer.module.css'
import { useParams } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../../service/firebase/firebaseConfig"

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [searchBar,setSearchBar] = useState(true)
    const { home } = useParams()
    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = !categoryId 
            ? collection(db, 'products') 
            : query(collection(db, 'products'), where('category', '==', categoryId))

        home ? setSearchBar(true) : setSearchBar(false)
        setLoading(true)

        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return (
            <div className={stylesItemListContainer.loading}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className={stylesItemListContainer.container}>
            <div className={stylesItemListContainer.searchBarContainer}>
                {searchBar ? (
                    <input type="search" placeholder="Buscar productos" className={stylesItemListContainer.searchBar}></input>
                    ) : ('')
                }
                
            </div>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;