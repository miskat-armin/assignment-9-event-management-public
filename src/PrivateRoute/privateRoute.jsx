import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()

    if (user) {
        return children;
    }
    else return <Navigate to={'/signin'} replace />
    
}

export default PrivateRoute;