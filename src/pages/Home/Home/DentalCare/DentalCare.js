import React from 'react';
import img1 from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../Shared/PrimaryButton';
import './DentalCare.css'

const DentalCare = () => {
    return (
        <div class=" tret mt-28  card lg:card-side bg-base-100 shadow-xl ">
  <figure><img src={img1} alt="Album"/></figure>
  <div class="card-body">
    <h2 className='card-title text-4xl  text-justify'>Exceptional Dental  <br></br>
    Care, on Your Terms</h2>
    <p className='text-justify '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <div class="card-actions justify-start">
    <PrimaryButton>Get started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default DentalCare;