import React from 'react';
import useFetch from '../../hooks/useFatch';
import Review from '../Review/Review';

const AllReviews = () => {
    const [watchs,setWatchs] = useFetch();
  return (
    <div className='grid grid-cols-3 gap-7'>
      {watchs.map(
        (review, idx) => idx < 3 && <Review key={review.id} review={review} />
      )}
    </div>
  );
}

export default AllReviews