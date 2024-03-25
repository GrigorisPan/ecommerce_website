import React, { useState } from 'react';

const Filters = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className='mb-3 py-2 border-b border-gray-30 relative '>
        <p className='text-secondary text-lg font-medium py-1 border-b-[1px] border-primary w-fit -mb-[9px]'>
          Filters
        </p>
      </div>
      <div className='divide-y'>
        {/* Brands filter start */}
        <div className='py-2 my-1'>
          <h3 className='text-md text-secondary mb-3  font-medium'>Brands</h3>
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <input
                type='checkbox'
                id='brnd-1'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
              />
              <label
                for='brnd-1'
                className='text-gray-600 text-sm ml-3 cursor-pointer'
              >
                Brand-1
              </label>
              <div className='ml-auto text-gray-600 text-sm'>(15)</div>
            </li>

            <li className='flex items-center'>
              <input
                type='checkbox'
                id='brnd-2'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
              />
              <label
                for='brnd-2'
                className='text-gray-600 text-sm ml-3 cursor-pointer'
              >
                Brand-2
              </label>
              <div className='ml-auto text-gray-600 text-sm'>(15)</div>
            </li>

            <li className='flex items-center'>
              <input
                type='checkbox'
                id='brnd-3'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
              />
              <label
                for='brnd-3'
                className='text-gray-600 text-sm ml-3 cursor-pointer'
              >
                Brand-3
              </label>
              <div className='ml-auto text-gray-600 text-sm'>(15)</div>
            </li>

            <li className='flex items-center'>
              <input
                type='checkbox'
                id='brnd-4'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
              />
              <label
                for='brnd-4'
                className='text-gray-600 text-sm ml-3 cursor-pointer'
              >
                Brand-4
              </label>
              <div className='ml-auto text-gray-600 text-sm'>(15)</div>
            </li>
          </ul>
          <p className='text-xs cursor-pointer my-4'>
            <a
              onClick={() => {
                setExpanded((prev) => !prev);
              }}
            >
              {expanded ? <span>- Show less</span> : <span>+ Show more</span>}
            </a>
          </p>
        </div>
        {/* Brands filter end */}
        {/* Price filter start */}
        <div className=' py-2 my-1'>
          <h3 className='text-md text-secondary mb-3  font-medium'>Price</h3>
          <div className='mt-4 flex items-center'>
            <input
              type='text'
              className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded'
              placeholder='min'
            />
            <span className='mx-3 text-gray-600'> - </span>
            <input
              type='text'
              className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded'
              placeholder='max'
            />
          </div>
          <button className='my-2 text-sm font-medium bg-gray-200 text-secondary hover:bg-secondary hover:text-white px-5 py-2 rounded-md  transition cursor-pointer'>
            Filter
          </button>
        </div>
        {/* Price filter end */}
      </div>
    </>
  );
};

export default Filters;
