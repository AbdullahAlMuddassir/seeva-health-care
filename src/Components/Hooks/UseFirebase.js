import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initailiazeAuthentication from "../Firebase/firebase.init";
initailiazeAuthentication(); 
const useFirebase = ()=>{
    const [user,setUser]=useState({});
    const [isLoding,setUseLoding]=useState(true);
    const [authError,setAuthError]=useState('');
    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();
    //googleSinginhandle
    const googleSignInUse =(location,navigate)=>{
        setUseLoding(true);
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUser(result.user);
            setAuthError('');
            const destination =location?.state?.from || '/';
            navigate(destination);
        }).catch((error)=>{
            setAuthError(error.message);
        })
        .finally (()=> setUseLoding(false));
    }
    // registerhandle
    const CreateAccountGoogle =(name,email,password,navigate)=>{
        console.log(email,password);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Login handle
    const loginWithEmailandPassword =(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
    }
    const updateName =(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
            // window.location.reload()
            const newUser ={...user,displayName:name}
            setUser(newUser);
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const logOut =()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    //observe user state
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged (auth,(user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
            setUseLoding(false);
        });
        return ()=>unsubscribed;
    },[auth])
    return{
        user,
        isLoding,
        setUseLoding,
        authError,
        setUser,
        CreateAccountGoogle,
        loginWithEmailandPassword,
        logOut,
        updateName,
        googleSignInUse
    }
}
export default useFirebase;
 //registerhandle
    // const registerUser =(email,password,Navigate) =>{
    //     setUser(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         setUser(userCredential.user);
    //         setAuthError('');
    //         Navigate('/')
    //       })
    //       .catch((error) => {
    //         setAuthError (error.message);
    //         console.log(error);
    //         // ..
    //       })
    //       .finally (()=> setUseLoding(false));
    // }
    //loginhandle
    // const loginUser =(email,password,location,navigate) =>{
    //     setUseLoding(true);
    //     signInWithEmailAndPassword (auth, email, password)
    //     .then((userCredential) => {
    //         const destination =location?.state?.from || "/";
    //         navigate(destination);
    //         // Signed in  
    //         setUser(userCredential.user);
    //         setAuthError('');
    //         // ...
    //       })
    //       .catch((error) => {
    //         setAuthError(error.message);
    //       })
    //       .finally(()=> setUseLoding(false));
    // }