import React from 'react';
import Banner from '../Banner/Banner';

import Info from '../Info';
import MakeAppoientment from '../MakeAppoientment';
import Services from '../Services';
import DentalCare from './DentalCare/DentalCare';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoientment></MakeAppoientment>
          
        </div>
    );
};

export default Home;