import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from './Header/Slider';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;