import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    // const [loginData, setLoginData] = useState({});
    const location=useLocation();
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { registerUser,setUser,setUseLoding,googleSignInUse,loginWithEmailandPassword} = useAuth();
    const handleGetEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleGetPassword =(e)=>{
        setPassword(e.target.value)
    }
    const handleLoginWithEmailAndPassword =(e)=>{
        e.preventDefault();
        loginWithEmailandPassword(email,password,navigate,location)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            // ...
            const destination =location?.state?.from || "/";
            navigate(destination);
        })
        .catch((error) => {
            setUser(error.message);
        })
        .finally (()=> setUseLoding(false));
    }
    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }
    // const handleLoginSubmit = e => {
    //     if (loginData.password !== loginData.password2) {
    //         alert('Your password did not match');
    //         return
    //     }
    //     registerUser(loginData.email, loginData.password, loginData.name, navigate);
    //     e.preventDefault();
    // }
    const handleGoogleSingIn = () => {
        googleSignInUse(location, navigate)
    }
    
    return (
        <div>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Please Login</h2>
                            <form onSubmit={handleLoginWithEmailAndPassword}>
                                <div class="mb-3">
                                <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" onBlur={handleGetEmail}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onBlur={handleGetPassword}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <p>New Seeva? <Link to="/register">Create Account</Link></p>
                            <div>
                                 ---------OR-------
                                <button className=' btn btn-primary' onClick={handleGoogleSingIn}>Google Sing in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;