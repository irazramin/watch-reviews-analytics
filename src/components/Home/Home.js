import React from 'react';
import useFetch from '../../hooks/useFatch';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';

const Home = () => {
    const [watchs,setWatchs] = useFetch();
    const homeReview = watchs.filter((item ,idx) => idx < 3);
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <Hero />
      </div>
      <div className='my-10'>
        <h3 className='text-center text-lg font-medium mb-5'>
          Total Reviews ({homeReview.length})
        </h3>
        <div className='grid grid-cols-3 gap-7'>
          {homeReview.map(
            (review, idx) =>
               <Review key={review.id} review={review} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home