import React, { useState } from 'react';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  console.log(id);
  return (
    <div className='hover:shadow-md rounded overflow-hidden p-3 group-wish h-full'>
      {/* product image */}
      <a href={`/product/:id`} className='flex flex-col items-stretch'>
        <p className='text-xs italic text-gray-400 mb-1'>{category}</p>
        <p className='mb-2 text-[#0062bd] font-bold line-clamp-2 h-10 leading-5	'>
          {title}
        </p>

        <div className='flex justify-center aspect-w-3 aspect-h-1 md:aspect-w-4 md:aspect-h-3'>
          <img src={image} alt='product' className=' object-contain' />
        </div>
      </a>
      {/* product image end */}
      {/* product content */}
      <div className='flex flex-col pt-2 px-4'>
        <div className='flex items-center mb-1'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className='h-5 text-sm text-primary'>
                <i className='fas fa-star' />
              </span>
            ))}
          <p className='text-xs text-gray-400 ml-3'>(150)</p>
        </div>
        <div className='flex items-center justify-between '>
          <div>
            <p className='text-sm line line-through'>&euro; 29.99</p>
            <p className='text-lg line'>&euro; {price} </p>
          </div>
          <a href='/' className='text-gray-400 hover:text-primary transition'>
            <i className='text-2xl fa-solid fa-cart-arrow-down'></i>
          </a>
        </div>
        <div className=' hidden md:group-wish-hover:block mt-2 md:group-wish-hover:border-t md:group-wish-hover:border-gray-300'>
          <a
            href='/'
            className='flex items-center justify-center space-x-2 mt-2 text-sm text-gray-400 hover:text-primary '
          >
            <i className='fas fa-heart '></i>
            <p>Wishlist</p>
          </a>
        </div>
      </div>
      {/* product content  end*/}
    </div>
  );
};

export default Product;
