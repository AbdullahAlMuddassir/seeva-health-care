import { Navigate, Outlet, useLocation } from "react-router-dom";
import useFirebase from "../Hooks/UseFirebase"

const PrivateRoute = ({children})=>{
    const {user}=useFirebase();
    return user.email ?children:<Navigate to="/login"/>
}
export default PrivateRoute;