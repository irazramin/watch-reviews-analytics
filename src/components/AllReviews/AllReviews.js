import React from 'react';
import useFetch from '../hooks/useFetch';
import Review from '../Review/Review';

const AllReviews = () => {
    const [reviews,setReviews] = useFetch();
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {reviews.map(
        (review, idx) =>  <Review key={review.id}  review={review} />
      )}
    </div>
  );
}

export default AllReviews