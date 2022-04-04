import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Review = ({review}) => {
    const { img, name, rating, reviewDesc } = review;
  return (
    <div className='flex border-2 p-3 '>
      <div className='mt-2'>
        <img className='w-[45px] h-[40px] rounded-full' src={img} alt='' />
      </div>
      <div className='ml-3'>
        <h4 className='text-lg font-semibold'>{name}</h4>
        <div className='flex items-center'>
          <StarRatings
            starRatedColor='orange'
            rating={rating}
            numberOfStars={5}
            name='rating'
            starDimension='15px'
            starSpacing='5px'
          />
          <span className='mt-[3px] ml-2'>({rating.toFixed(1)}) </span>
        </div>
        <p>{reviewDesc}</p>
      </div>
    </div>
  );
}

export default Review