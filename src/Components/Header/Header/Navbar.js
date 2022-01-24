import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-dark bg-dark shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                    <nav class="navbar navbar-expand-lg fixed-top">
                            <div class="container-fluid">
                                <Link class="navbar-brand" to="#">Welcome to Seeva</Link>
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
                                    <Link to="/service" className='nav-link active'>Service</Link>
                                    </li>
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