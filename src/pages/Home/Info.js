import React from 'react';

import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './Home/InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 p-2 lg:grid-cols-3 gap-5'>
        <InfoCard cardTitle="Opening Hours" bgclassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
        <InfoCard cardTitle="Our Locations" bgclassName="bg-neutral" img={marker}></InfoCard>
        <InfoCard cardTitle="Contact Us" bgclassName="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
    </div>
    );
};

export default Info;