import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';

import Info from '../Info';
import MakeAppoientment from '../MakeAppoientment';
import Services from '../Services';
import Testimonial from '../Testimonial';
import Contact from './Contact';
import DentalCare from './DentalCare/DentalCare';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoientment></MakeAppoientment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;