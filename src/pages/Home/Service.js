import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluride  from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 mt-6 '>

        
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={fluride} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Fluoride Treatment</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
          
        </div>
      </div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={cavity} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Cavity Filling</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
        
        </div>
      </div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={whitening} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Teeth Whitening</h2>
          <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
         
        </div>
      </div>
      </div>
    );
};

export default Service;