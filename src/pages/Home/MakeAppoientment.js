import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import app from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoientment = () => {
    return (
       <section style={{
         background:`url(${app})`
       }} className='mt-12 flex justify-center items-center'>
           <div className='flex-1 hidden lg:block'>
         <img  className='mt-[-60px]' src={doctor}></img>
           </div>
           <div className='flex-1  mr-28 '>
           <h3 className='text-xl text-primary '>Appointment</h3>
           <h2 className='text-3xl   text-white'>Make an appointment Today</h2>
           <p className='text-justify text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
           <PrimaryButton>Get started</PrimaryButton>
           </div>
       </section>
    );
};

export default MakeAppoientment;