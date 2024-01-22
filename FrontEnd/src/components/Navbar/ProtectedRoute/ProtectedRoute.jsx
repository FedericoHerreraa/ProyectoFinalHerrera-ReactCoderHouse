import { useAuth } from "../../../context/authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (!user) return <Navigate to='/login'/>
    if (loading) return <h1>Cargando...</h1>

    return <>{children}</>
}