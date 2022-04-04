import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Hero/Hero';
import useFetch from '../hooks/useFetch';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews] = useFetch();
    const navigate = useNavigate();
    const homeReview = reviews.filter((item ,idx) => idx < 3);

    const handleReviewsNavigate = () =>{
    const path = '/reviews';
    navigate(path);
    }
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <Hero />
      </div>
      <div className='my-10'>
        <h3 className='text-center text-lg font-medium mb-5'>
          Total Reviews ({homeReview.length})
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {homeReview.map((review, idx) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className=' text-center mt-10'>
          <button className='bg-orange-500 px-6 text-white hover:bg-orange-800 py-2' onClick={handleReviewsNavigate}>See all review</button>
        </div>
      </div>
    </div>
  );
}

export default Home