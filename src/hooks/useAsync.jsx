import { useEffect, useState } from "react"

export const useAsync = (asyncFunction, dependencies = []) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        asyncFunction()
            .then(resp => {
                setProducts(resp)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [...dependencies])

    return [products, loading, error]
}

