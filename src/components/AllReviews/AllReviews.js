import React from 'react';
import useFetch from '../hooks/useFatch';
import Review from '../Review/Review';

const AllReviews = () => {
    const [watchs,setWatchs] = useFetch();
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {watchs.map(
        (review, idx) =>  <Review key={review.id}  review={review} />
      )}
    </div>
  );
}

export default AllReviews