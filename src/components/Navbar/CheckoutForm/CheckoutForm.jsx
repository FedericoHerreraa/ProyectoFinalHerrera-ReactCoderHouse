import { useState } from 'react'
import styles from './CheckoutForm.module.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }
    
        onConfirm(userData)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleConfirm}>
                <div className={styles.input}>
                    <label htmlFor="">Nombre:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)} 
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="">Telefono:</label>
                    <input type="number" 
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="">Email:</label>
                    <input type="email" 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className={styles.button}>
                    <input type="submit" value="Finalizar compra"/>
                </div>
            </form>
        </div>
    )


}

export default CheckoutForm;