import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h6>Opps!</h6>
                            <p>Not found this page.please correct path name.Others wise fllow button.</p>
                            <Link to="/"><button className='btn btn-danger'>Fllow Button</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;