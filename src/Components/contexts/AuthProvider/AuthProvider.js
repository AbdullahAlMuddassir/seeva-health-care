import { createContext } from "react";
import useFirebase from "../../Hooks/UseFirebase";

export const AuthContext= createContext(null);

const AuthProvider = ({ children })=>{
    const allcontexts=useFirebase();
    return(
        <AuthContext.Provider value={allcontexts}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;