import React from 'react';
import hero from '../../img/hero-img.png';
const Hero = () => {
  return (
    <section className='flex items-center w-10/12 mx-auto justify-between mt-10'>
      <div>
        <h1 className='text-6xl font-semibold '>
          {' '}
          Find <span className='text-orange-500'>your favorite</span> watch
        </h1>
        <p className='text-lg mt-8 '>
          WatchBox is home to the greatest collection of pre-owned luxury
          watches, all certified as authentic and Collector Quality.
        </p>
      </div>
      <div>
        <img className='object-cover' src={hero} alt='' />
      </div>
    </section>
  );
}

export default Hero