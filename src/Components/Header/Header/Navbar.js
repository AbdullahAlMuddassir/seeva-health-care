import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const{user,logOut}=useAuth();
    return (
        <div className='navbar-dark bg-dark shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <Link class="navbar-brand" to="/">Welcome to Seeva</Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <Link to="/" className='nav-link active'>Home</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/about" className='nav-link active'>About</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/service" className='nav-link active'>Services</Link>
                                    </li>
                                    {
                                        user.email ? <button onClick={logOut}>LogOut</button>
                                    :
                                    <li class="nav-item">
                                    <Link to="/login" className='nav-link active'>Login</Link>
                                    </li>}
                                    <p className='text-white'>{user?.displayName}</p>
                                </ul>
                                </div>
                            </div>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;