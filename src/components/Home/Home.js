import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <Hero />
      </div>
      <div>
        <h3>All reviews</h3>
        <AllReviews />
      </div>
    </div>
  );
}

export default Home