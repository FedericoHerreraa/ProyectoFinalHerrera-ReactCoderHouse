import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

export const getProducts = (categoryId) => {
    const productsRef = !categoryId 
        ? collection(db, 'products') 
        : query(collection(db, 'products'), where('category', '==', categoryId))

    return getDocs(productsRef)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            return productsAdapted
        })
        .catch((error) => {
            console.log(error)
        })

}

export const getProductByCategory = (productId) => {
    const productRef = doc(db, 'products', productId)
    return getDoc(productRef)
        .then(res => {
            const data = res.data()
            const productAdapted = { id: res.id, ...data}
            return productAdapted
        })
        .catch((error) => {
            console.log(error)
        })     
}