import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import 'firebase/firestore';
import { useCart } from "../../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import styles from './Checkout.module.css'
import { db } from "../../../service/firebase/firebaseConfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert';


const Checkout = () => {
    const [loading,setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const navigate = useNavigate()

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        
        try {
            const totalValue = total()

            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalValue
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)

            const outOfStock = []

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const dbStock = fieldsDoc.stock

                const prodAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prodAddedToCart?.quantity

                if (dbStock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dbStock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                console.log(orderRef)
                const { id } = await addDoc(orderRef, objOrder)

                swal("Se genero la orden con exito", "El ID de la compra es: " + id, "success");
                navigate('/')
                clearCart()
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className={styles.title}>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout