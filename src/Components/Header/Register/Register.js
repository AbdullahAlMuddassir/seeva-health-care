import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Register = () => {
    const {googleSignInUse}=useFirebase();
    return (
        <div>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Please Register</h2>
                            <form>
                                <div class="mb-3">
                                <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Re-enter-password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onBlur="">Register</button>
                            </form>
                            <p>Already Have a account? <Link to="/login">Login</Link></p>
                            <div>
                                 ---------OR-------
                                <button className=' btn btn-primary' onClick={googleSignInUse}>Google Sing in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;