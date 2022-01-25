import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initailiazeAuthentication from "../Firebase/firebase.init";
initailiazeAuthentication(); 
const useFirebase = ()=>{
    const [user,setUser]=useState({});
    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignInUse =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    return{
        googleSignInUse
    }
}
export default useFirebase;