import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebaseConfig";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
} from "firebase/auth";


const context = createContext()

export const useAuth = () => useContext(context)

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email,password) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email,password) => 
        signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    })

    return (
        <context.Provider value={{ signUp, login, user, logout, loading }}>
            {children}
        </context.Provider>
    )
}