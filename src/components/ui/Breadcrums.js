import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrums = ({ mainCategory, subCategory }) => {
  return (
    <div className='lg:container py-4 flex items-center gap-3'>
      <Link to='/' className='text-primary text-base'>
        <i className='fas fa-home' />
      </Link>
      <span className='text-xs text-secondary'>
        <i className='fas fa-chevron-right'></i>
      </span>
      <Link to={`/shop`}>
        <p className='text-gray-500'>shop</p>
      </Link>
      {mainCategory && (
        <>
          <span className='text-xs text-secondary'>
            <i className='fas fa-chevron-right'></i>
          </span>
          <Link
            to={`product-category/${mainCategory}/`}
            className='text-primary text-base'
          >
            <p className='text-gray-500'>{mainCategory}</p>
          </Link>
        </>
      )}
      {subCategory && (
        <>
          <span className='text-xs text-secondary'>
            <i className='fas fa-chevron-right'></i>
          </span>
          <Link
            to={`product-category/${subCategory}/`}
            className='text-primary text-base'
          >
            <p className='text-gray-500'>{subCategory}</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrums;
