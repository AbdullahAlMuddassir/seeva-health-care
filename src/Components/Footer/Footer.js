import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section className='section footer bg-dark text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h6>Seeva Information</h6>
                            <hr/>
                            <div>
                                Address:Road-27,Chawkbazar-Chittagong.
                            </div>
                            <div>E-mail:abdullahalmuddassir@gmail.com</div>
                        </div>
                        <div className='col-md-4'>
                            <h6>Social Media</h6>
                            <hr/>
                                <div><Link to="" className='text-white'>Facebook</Link></div>
                                <div><Link to="" className='text-white'>Instagram</Link></div>
                                <div><Link to="" className='text-white'>whatsApp</Link></div>
                        </div>
                        <div className='col-md-4'>
                            <h6>Serial Number</h6>
                            <hr/>
                            <p>Morning-9:00 AM--11:00 AM</p>
                                <div>Mobile:01850526050</div>
                                <div>Mobile:01850526052</div>
                                <div>Mobile:01850526053</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;