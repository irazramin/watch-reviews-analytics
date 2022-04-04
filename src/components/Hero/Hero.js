import React from 'react';
import hero from '../../img/hero-img.png';
const Hero = () => {
  return (
    <section className='lg:flex-row flex-col-reverse flex items-center  justify-between mt-10'>
      <div>
        <h1 className='text-6xl font-semibold '>
          {' '}
          Find <span className='text-orange-500'>your favorite</span> watch
        </h1>
        <p className='text-lg mt-8 '>
          This is home to the greatest collection of pre-owned luxury
          watches, all certified as authentic and Collector Quality.
        </p>
        <button className='border-2 p-2 mt-5 hover:bg-slate-900 hover:text-white rounded border-slate-900'>
          Live demo
        </button>
      </div>
      <div>
        <img className='object-cover lg:w-full w-72' src={hero} alt='' />
      </div>
    </section>
  );
}

export default Hero