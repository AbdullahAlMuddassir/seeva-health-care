import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children})=>{
    const {user,isLoding}=useAuth();
    let location =useLocation();
    if(isLoding){return"loading"
}
    return  user.email ? children:<Navigate to="/login" state={{from:location}}/>
}
export default PrivateRoute;