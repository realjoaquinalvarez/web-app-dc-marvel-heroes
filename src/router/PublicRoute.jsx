import { useContext } from "react"
import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext )
    
    return (logged) 
        ? children
        : <Navigate to='/login' />
}